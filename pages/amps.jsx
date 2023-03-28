import { client } from '@/lib/client'
// Next.js
import Image from 'next/image'
// React
import { useState, useMemo, useEffect } from 'react'
// Styles
import categoryStyles from '../styles/Category.module.css'
// Images
import ampBanner from '@/public/images/amp-category-banner.png'
import ampBannerMobile from '@/public/images/amp-category-banner-mobile.png'
// Components
import HeroCarousel from '@/components/HeroCarousel'
import ProductContainer from '@/components/ProductContainer'
// import FilterMenu from '@/components/product-filter/FilterMenu'

import { useStateContext } from '@/context/StateContext'

export default function Amps({ amps }) {
	const { incQty, decQty } = useStateContext()
	const [query, setQuery] = useState('')
	const [isMobile, setIsMobile] = useState(false)

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

	useEffect(() => {
		const contentWatcher = window.matchMedia('(max-width: 600px)')
		setIsMobile(contentWatcher.matches)

		function updateIsMobile(e) {
			setIsMobile(e.matches)
		}
		if (contentWatcher.addEventListener) {
			contentWatcher.addEventListener('change', updateIsMobile)
			return function cleanup() {
				contentWatcher.removeEventListener('change', updateIsMobile)
			}
		} else {
			contentWatcher.addListener(updateIsMobile)
			return function cleanup() {
				contentWatcher.removeListener(updateIsMobile)
			}
		}
	})

	return (
		<>
			<title>GuitHub | Amps</title>
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
					src={isMobile ? ampBannerMobile : ampBanner}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: 'auto', marginTop: '-2rem' }}
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
