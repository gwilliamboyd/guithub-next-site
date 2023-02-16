import Link from 'next/link'
import { client, urlFor } from '@/lib/client'
import { useMemo, useState } from 'react'
import GuitarContainer from '@/components/GuitarContainer'
import { GuitarCard } from '@/components/GuitarCard'
import Pagination from '@/components/Pagination'

export default function IndexPage({ guitars }) {
	// const guitPerPage = 4

	// State declaration
	const [query, setQuery] = useState('')
	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(4)
	// const [firstIndex, setFirstIndex] = useState(0)
	// const [lastIndex, setLastIndex] = useState(firstIndex + guitPerPage)

	// Search bar
	const filteredGuitars = useMemo(() => {
		return guitars.filter(guitar =>
			Object.values(guitar)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [guitars, query])
	// Set guitars per page
	// let firstIndex = 0
	// let lastIndex

	/*	const nextPage = () => {
		setFirstIndex(lastIndex)
		setLastIndex(lastIndex + guitPerPage)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}
 	const currentGuitars = useMemo(() => {
		if (firstIndex > 8) {
			console.log('end of list')
			return
		} else {
			return filteredGuitars.slice(firstIndex, lastIndex)
		}
	}, [filteredGuitars, firstIndex, lastIndex])
 */

	const lastIndex = currentPage * guitPerPage
	const firstIndex = lastIndex - guitPerPage
	const currentGuitars = filteredGuitars.slice(firstIndex, lastIndex)
	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<>
			<header className='header'>
				<h1>GuitHub</h1>
			</header>
			<main className='main-container'>
				<h1>Guitars:</h1>
				<br />
				{guitars.length > 0 && (
					<div className='guitars-container'>
						{currentGuitars.map(guitar => (
							<GuitarCard guitar={guitar} />
						))}
					</div>
				)}
				<input
					type='text'
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
				<Pagination
					guitPerPage={guitPerPage}
					totalGuitars={filteredGuitars.length}
					paginate={paginate}
				/>{' '}
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
