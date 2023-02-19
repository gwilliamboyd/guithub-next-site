import { useMemo } from 'react'
const SearchBar = ({ navbarStyles, query, setQuery }) => {
	return (
		<div className={navbarStyles.searchBar}>
			<input
				type='text'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
		</div>
	)
}

export default SearchBar
