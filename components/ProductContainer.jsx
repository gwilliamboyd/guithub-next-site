import { useEffect, useMemo, useState } from 'react'
import { GuitarCard } from '@/components/GuitarCard'
import Pagination from '@/components/Pagination'

export default function ProductContainer({
	products,
	categoryStyles,
	guitPerPage,
	filteredProducts,
	currentProducts,
	paginate,
}) {
	const [query, setQuery] = useState('')
	// const [firstIndex, setFirstIndex] = useState(0)
	// const [lastIndex, setLastIndex] = useState(firstIndex + guitPerPage)

	// FLIP BETWEEN PAGES ONE AT A TIME
	/* 
	// Set products per page
	let firstIndex = 0
	let lastIndex

		const nextPage = () => {
		setFirstIndex(lastIndex)
		setLastIndex(lastIndex + guitPerPage)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}
 	const currentProducts = useMemo(() => {
		if (firstIndex > 8) {
			console.log('end of list')
			return
		} else {
			return filteredProducts.slice(firstIndex, lastIndex)
		}
	}, [filteredProducts, firstIndex, lastIndex])
 */

	useEffect(() => {
		console.log(currentProducts)
		console.log(filteredProducts)
	}, [query])

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
			/>{' '}
		</>
	)
}
