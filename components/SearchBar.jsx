import { useState } from 'react'
import { useStateContext } from '@/context/StateContext'

const SearchBar = ({ navbarStyles, guitars }) => {
	const { handleSearch } = useStateContext()
	const [query, setQuery] = useState('')
	return (
		<div className={navbarStyles.searchBar}>
			<form
				onSubmit={e => {
					e.preventDefault()
					const searchResults = guitars.filter(product =>
						Object.values(product)
							.map(String)
							.some(v => v.toLowerCase().includes(query.toLowerCase()))
					)
					console.log(searchResults)
				}}>
				<input
					type='text'
					value={query}
					onChange={e => {
						setQuery(e.target.value)
					}}
					// onSubmit={e => {
					// 	e.preventDefault()
					// 	handleSearch(query, guitars)
					// }}
				/>
			</form>
		</div>
	)
}

export default SearchBar
