import { client } from '@/lib/client'
import { useState, useMemo, useEffect } from 'react'
// Styles
import categoryStyles from '../styles/Category.module.css'
// Components
import HeroCarousel from '@/components/HeroCarousel'
import ProductContainer from '@/components/ProductContainer'
import FilterMenu from '@/components/product-filter/FilterMenu'

import { useStateContext } from '@/context/StateContext'

export default function Amps({ amps }) {
	const { incQty, decQty } = useStateContext()
	const [query, setQuery] = useState('')

	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(4)

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
				<FilterMenu
					amps={amps}
					query={query}
					setQuery={setQuery}
				/>
				<h1 className={categoryStyles.categoryHeading}>Amplifiers</h1>
				<HeroCarousel categoryStyles={categoryStyles} />
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
