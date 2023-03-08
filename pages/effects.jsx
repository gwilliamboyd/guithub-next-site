import { client } from '@/lib/client'
import { useState, useMemo, useEffect } from 'react'
// Styles
import categoryStyles from '../styles/Category.module.css'
// Components
import HeroCarousel from '@/components/HeroCarousel'
import ProductContainer from '@/components/ProductContainer'
import FilterMenu from '@/components/product-filter/FilterMenu'

import { useStateContext } from '@/context/StateContext'

export default function Effects({ effects }) {
	const { incQty, decQty } = useStateContext()
	const [query, setQuery] = useState('')

	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(4)

	// Search bar
	/* const filteredeffects = useMemo(() => {
		return effects.filter(effect =>
			Object.values(effect)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [effects, query]) */

	const lastIndex = currentPage * guitPerPage
	const firstIndex = lastIndex - guitPerPage
	const currentEffects = effects.slice(firstIndex, lastIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber)
	// console.log(effects)
	// Search bar
	const filteredProducts = useMemo(() => {
		return currentEffects.filter(product =>
			Object.values(product)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [effects, query])

	useEffect(() => console.log(query), [query])

	return (
		<>
			<main className={categoryStyles.mainContainer}>
				<FilterMenu
					effects={effects}
					query={query}
					setQuery={setQuery}
				/>
				<h1 className={categoryStyles.categoryHeading}>Effects Pedals</h1>
				<HeroCarousel categoryStyles={categoryStyles} />
				<ProductContainer
					products={effects}
					categoryStyles={categoryStyles}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					guitPerPage={guitPerPage}
					lastIndex={lastIndex}
					firstIndex={firstIndex}
					filteredProducts={filteredProducts}
					currentProducts={currentEffects}
					paginate={paginate}
				/>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const effects = await client.fetch(`*[_type == "effect"]`)

	return {
		props: {
			effects,
		},
	}
}
