import { client } from '@/lib/client'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import GuitarContainer from '@/components/GuitarContainer'
import categoryStyles from '@/styles/Category.module.css'
import { useStateContext } from '@/context/StateContext'

export default function Guitars({ guitars }) {
	const { incQty, decQty } = useStateContext()

	// State declaration
	const [query, setQuery] = useState('')
	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(4)

	// Search bar
	const filteredGuitars = useMemo(() => {
		return guitars.filter(guitar =>
			Object.values(guitar)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [guitars, query])

	const lastIndex = currentPage * guitPerPage
	const firstIndex = lastIndex - guitPerPage
	const currentGuitars = filteredGuitars.slice(firstIndex, lastIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber)
	console.log(guitars)

	return (
		<>
			<main className={categoryStyles.mainContainer}>
				<h1
					className={categoryStyles.categoryHeading}
					onClick={incQty}>
					Electric Guitars
				</h1>
				<HeroCarousel categoryStyles={categoryStyles} />
				<GuitarContainer
					guitars={guitars}
					categoryStyles={categoryStyles}
					query={query}
					setQuery={setQuery}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					guitPerPage={guitPerPage}
					lastIndex={lastIndex}
					firstIndex={firstIndex}
					currentGuitars={currentGuitars}
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
