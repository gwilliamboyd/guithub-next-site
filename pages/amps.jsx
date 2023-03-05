import { client } from '@/lib/client'
import { useState, useMemo, useEffect } from 'react'
// Styles
import categoryStyles from '../styles/Category.module.css'
// Components
import HeroCarousel from '@/components/HeroCarousel'
import ProductContainer from '@/components/ProductContainer'

import { useStateContext } from '@/context/StateContext'

export default function Amps({ amps }) {
	const { incQty, decQty } = useStateContext()

	// State declaration
	const [query, setQuery] = useState('')
	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(4)

	// Search bar
	/* const filteredAmps = useMemo(() => {
		return amps.filter(amp =>
			Object.values(amp)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [amps, query]) */

	const lastIndex = currentPage * guitPerPage
	const firstIndex = lastIndex - guitPerPage
	const currentAmps = amps.slice(firstIndex, lastIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber)
	// console.log(amps)

	return (
		<>
			<main className={categoryStyles.mainContainer}>
				<h1 className={categoryStyles.categoryHeading}>Amplifiers</h1>
				<HeroCarousel categoryStyles={categoryStyles} />
				<ProductContainer
					products={amps}
					categoryStyles={categoryStyles}
					query={query}
					setQuery={setQuery}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					guitPerPage={guitPerPage}
					lastIndex={lastIndex}
					firstIndex={firstIndex}
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
