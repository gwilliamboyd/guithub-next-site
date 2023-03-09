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
	useEffect(() => {
		console.log(`Current Products: ${currentProducts.length}`)
	}, [currentProducts])
	const previousPage = () => {
		if (firstIndex == 0) {
			return null
		}
		setCurrentPage(currentPage - 1)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}
	const nextPage = () => {
		if (lastIndex > products.length) {
			return null
		}
		setCurrentPage(currentPage + 1)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}

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
