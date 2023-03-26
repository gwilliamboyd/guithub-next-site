import { client } from '@/lib/client'
import Image from 'next/image'
import { useState, useMemo, useEffect } from 'react'
// Styles
import categoryStyles from '../styles/Category.module.css'
import effectBanner from '@/public/images/effect-category-banner.png'
import effectBannerMobile from '@/public/images/effect-category-banner-mobile.png'
// Components
import HeroCarousel from '@/components/HeroCarousel'
import ProductContainer from '@/components/ProductContainer'
// import FilterMenu from '@/components/product-filter/FilterMenu'

import { useStateContext } from '@/context/StateContext'

export default function Effects({ effects }) {
	const { incQty, decQty } = useStateContext()
	const [query, setQuery] = useState('')
	const [isMobile, setIsMobile] = useState(false)

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
			<main className={categoryStyles.mainContainer}>
				{/* <FilterMenu
					effects={effects}
					query={query}
					setQuery={setQuery}
				/> */}
				<h1
					className={[
						`${categoryStyles.categoryHeading} ${categoryStyles.categoryHeadingEffect}`,
					]}>
					Effects Pedals
				</h1>
				<Image
					src={isMobile ? effectBannerMobile : effectBanner}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: 'auto', marginBottom: '2rem' }}
				/>
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
