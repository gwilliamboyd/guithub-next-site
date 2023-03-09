import { useEffect, useMemo, useState } from 'react'
import { GuitarCard } from '@/components/GuitarCard'
import Pagination from '@/components/Pagination'

export default function ProductContainer({
	products,
	categoryStyles,
	currentPage,
	setCurrentPage,
	guitPerPage,
	firstIndex,
	lastIndex,
	filteredProducts,
	currentProducts,
	paginate,
}) {
	// const [firstIndex, setFirstIndex] = useState(0)
	// const [lastIndex, setLastIndex] = useState(firstIndex + guitPerPage)

	// FLIP BETWEEN PAGES ONE AT A TIME

	// Set products per page
	// let firstIndex = 0
	// let lastIndex

	const previousPage = () => {
		// firstIndex = lastIndex
		// lastIndex = lastIndex + guitPerPage
		if (currentProducts.length < 1) {
			return
		}
		setCurrentPage(currentPage - 1)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}
	const nextPage = () => {
		// firstIndex = lastIndex
		// lastIndex = lastIndex + guitPerPage
		if (currentProducts.length < 1) {
			return
		}
		setCurrentPage(currentPage + 1)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}
	/*
 	const currentProducts = useMemo(() => {
		if (firstIndex > 8) {
			console.log('end of list')
			return
		} else {
			return filteredProducts.slice(firstIndex, lastIndex)
		}
	}, [filteredProducts, firstIndex, lastIndex])
 */

	return (
		<>
			<main className={categoryStyles.guitarsContainer}>
				{products.length > 0 && (
					<div className={categoryStyles.guitarsContainer}>
						{currentProducts.map(product => (
							<GuitarCard
								key={product._id}
								product={product}
								categoryStyles={categoryStyles}
							/>
						))}
					</div>
				)}
			</main>
			<Pagination
				guitPerPage={guitPerPage}
				totalProducts={filteredProducts.length}
				paginate={paginate}
				firstIndex={firstIndex}
				lastIndex={lastIndex}
				previousPage={previousPage}
				nextPage={nextPage}
			/>{' '}
		</>
	)
}
