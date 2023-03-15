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
	const [guitPerPage] = useState(6)

	// Search bar
	const filteredProducts = useMemo(() => {
		return effects.filter(product =>
			Object.values(product)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [effects, query])

	useEffect(() => console.log(`Query: ${query}`), [query])

	let inputString = 'WhatHaveYouTried?'
	let newInputString = inputString.replace(/([A-Z])/g, ' $1').trim()

	console.log(newInputString)

	/* const getAttribute = attr => {
		const attributeArray = []

		const attributes = effects.map(product => {
			let value = product.attr
			attributeArray.push(value)
			return attributeArray
		})
		// console.log(attributes[0])
		return attributes
	} */

	/* 	useEffect(() => {
		getAttribute()
	}, []) */

	const lastIndex = currentPage * guitPerPage
	const firstIndex = lastIndex - guitPerPage
	const currentEffects = filteredProducts.slice(firstIndex, lastIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<>
			<main className={categoryStyles.mainContainer}>
				{/* <FilterMenu
					effects={effects}
					query={query}
					setQuery={setQuery}
				/> */}
				<h1 className={categoryStyles.categoryHeading}>Effects Pedals</h1>
				{/* <HeroCarousel categoryStyles={categoryStyles} /> */}
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
