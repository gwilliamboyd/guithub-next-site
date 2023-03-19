import { client } from '@/lib/client'
// Next.js
import Image from 'next/image'
// React
import { useState, useMemo, useEffect } from 'react'
// Styles
import categoryStyles from '../styles/Category.module.css'
// Images
import ampBanner from '@/public/images/amp-category-banner.png'
// Components
import HeroCarousel from '@/components/HeroCarousel'
import ProductContainer from '@/components/ProductContainer'
// import FilterMenu from '@/components/product-filter/FilterMenu'

import { useStateContext } from '@/context/StateContext'

export default function Amps({ amps }) {
	const { incQty, decQty } = useStateContext()
	const [query, setQuery] = useState('')

	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(6)

	// Search bar
	const filteredProducts = useMemo(() => {
		return amps.filter(product =>
			Object.values(product)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [amps, query])

	useEffect(() => console.log(query), [query])

	const lastIndex = currentPage * guitPerPage
	const firstIndex = lastIndex - guitPerPage
	const currentAmps = filteredProducts.slice(firstIndex, lastIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<>
			<main className={categoryStyles.mainContainer}>
				{/* <FilterMenu
					amps={amps}
					query={query}
					setQuery={setQuery}
				/> */}
				<h1
					className={[
						`${categoryStyles.categoryHeading} ${categoryStyles.categoryHeadingAmp}`,
					]}>
					Amplifiers
				</h1>
				<Image
					src={ampBanner}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: 'auto', marginTop: '-4rem' }}
				/>
				{/* <HeroCarousel categoryStyles={categoryStyles} /> */}
				<ProductContainer
					products={amps}
					categoryStyles={categoryStyles}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					guitPerPage={guitPerPage}
					lastIndex={lastIndex}
					firstIndex={firstIndex}
					filteredProducts={filteredProducts}
					currentProducts={currentAmps}
					paginate={paginate}
				/>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const amps = await client.fetch(`*[_type == "amp"]`)

	return {
		props: {
			amps,
		},
	}
}
