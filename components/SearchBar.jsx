import { useMemo, createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchBar = ({ navbarStyles }) => {
	const [query, setQuery] = useState('')
	return (
		<div className={navbarStyles.searchBar}>
			<input
				type='text'
				value={query}
				// onSubmit={e => {
				// 	e.preventDefault()
				// 	setQuery(e.target.value)
				// }}
				onChange={e => {
					setQuery(e.target.value)
					console.log(query)
				}}
			/>
		</div>
	)
}

export default SearchBar
