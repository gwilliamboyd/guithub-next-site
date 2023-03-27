import { useEffect, useMemo, useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
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
		if (lastIndex > products.length - 1) {
			return null
		}
		setCurrentPage(currentPage + 1)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}

	return (
		<>
			<main className={categoryStyles.productsMaster}>
				{products.length > 0 && (
					<div className={categoryStyles.productsContainer}>
						{currentProducts.map(product => (
							<ProductCard
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
