import { client } from '@/lib/client'
import { useMemo, useState } from 'react'
import { GuitarCard } from '@/components/GuitarCard'
import Pagination from '@/components/Pagination'

export default function GuitarContainer({
	guitars,
	categoryStyles,
	query,
	setQuery,
	guitPerPage,
	currentGuitars,
	paginate,
}) {
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
	// FLIP BETWEEN PAGES ONE AT A TIME
	/* 
	// Set guitars per page
	let firstIndex = 0
	let lastIndex

		const nextPage = () => {
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

	return (
		<>
			<input
				className={categoryStyles.searchBar}
				type='text'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<main className={categoryStyles.guitarsContainer}>
				{guitars.length > 0 && (
					<div className={categoryStyles.guitarsContainer}>
						{currentGuitars.map(guitar => (
							<GuitarCard
								key={guitar._id}
								guitar={guitar}
								categoryStyles={categoryStyles}
							/>
						))}
					</div>
				)}
			</main>
			<Pagination
				guitPerPage={guitPerPage}
				totalGuitars={filteredGuitars.length}
				paginate={paginate}
			/>{' '}
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
