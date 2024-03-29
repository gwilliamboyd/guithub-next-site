import { client } from '@/lib/client'
// Next.js
import Image from 'next/image'
// React
import { useState, useMemo, useEffect } from 'react'
// Styles
import categoryStyles from '../styles/Category.module.css'
// Images
import guitarBanner from '@/public/images/guitar-category-banner.png'
import guitarBannerMobile from '@/public/images/guitar-category-banner-mobile.png'
// Components
import HeroCarousel from '@/components/HeroCarousel'
import ProductContainer from '@/components/ProductContainer'
// import FilterMenu from '@/components/product-filter/FilterMenu'

import { useStateContext } from '@/context/StateContext'

export default function Guitars({ guitars }) {
	const { incQty, decQty } = useStateContext()
	const [query, setQuery] = useState('')
	const [isMobile, setIsMobile] = useState(false)

	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(6)

	// Search bar
	const filteredProducts = useMemo(() => {
		return guitars.filter(product =>
			Object.values(product)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [guitars, query])

	// Detect whether site is being viewed on mobile
	useEffect(() => console.log(query), [query])

	const lastIndex = currentPage * guitPerPage
	const firstIndex = lastIndex - guitPerPage
	const currentGuitars = filteredProducts.slice(firstIndex, lastIndex)
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
			<title>GuitHub | Guitars</title>
			<main className={categoryStyles.mainContainer}>
				{/* <FilterMenu
					guitars={guitars}
					query={query}
					setQuery={setQuery}
				/> */}
				<h1
					className={[
						`${categoryStyles.categoryHeading} ${categoryStyles.categoryHeadingGuitar}`,
					]}>
					Electric Guitars
				</h1>
				<Image
					src={isMobile ? guitarBannerMobile : guitarBanner}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: 'auto' }}
				/>
				{/* <div className={categoryStyles.filterBarMaster}>
					<div className={categoryStyles.filterBar}>
						<span>Filter products by:</span>
						<div className={categoryStyles.filterBarRight}>
							<span className={categoryStyles.filterBarCategory}>Brand</span>
							<span className={categoryStyles.filterBarCategory}>
								Body Material
							</span>
							<span className={categoryStyles.filterBarCategory}>
								Pickup Type
							</span>
							<span className={categoryStyles.filterBarCategory}>Price</span>
						</div>
					</div>
				</div> */}
				{/* <HeroCarousel categoryStyles={categoryStyles} /> */}
				<ProductContainer
					products={guitars}
					categoryStyles={categoryStyles}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					guitPerPage={guitPerPage}
					lastIndex={lastIndex}
					firstIndex={firstIndex}
					filteredProducts={filteredProducts}
					currentProducts={currentGuitars}
					paginate={paginate}
				/>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const guitars = await client.fetch(`*[_type == "guitar"]`)
	// const guitars = await res.json()

	return {
		props: {
			guitars,
		},
	}
}
