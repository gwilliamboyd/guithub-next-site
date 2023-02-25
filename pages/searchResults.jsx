import { useState, useMemo } from 'react'
import { client } from '@/lib/client'
import searchStyles from '../styles/Search.module.css'

const searchResults = ({ guitars, amps, query }) => {
	console.log(guitars)
	console.log(amps)

	// const guitPerPage = 4

	// State declaration
	const [results, setResults] = useState(query)
	// Pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [guitPerPage] = useState(4)
	// const [firstIndex, setFirstIndex] = useState(0)
	// const [lastIndex, setLastIndex] = useState(firstIndex + guitPerPage)

	// Search bar
	const filteredItems = useMemo(() => {
		return results.filter(result =>
			Object.values(result)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [results, query])

	return (
		<>
			<div className={searchStyles.searchMaster}>Search results:</div>
			{filteredItems.map(item => (
				<div className={searchStyles.searchItem}></div>
			))}
		</>
	)
}

export default searchResults

export const getServerSideProps = async () => {
	const guitarQuery = '*[_type == "guitar"]'
	const guitars = await client.fetch(guitarQuery)

	const ampQuery = '*[_type == "amp"]'
	const amps = await client.fetch(ampQuery)

	return {
		props: { guitars, amps },
	}
}
