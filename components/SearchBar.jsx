import { useState, useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'

const SearchBar = ({ navbarStyles, products }) => {
	const router = useRouter()
	const { handleSearch } = useStateContext()
	const [query, setQuery] = useState('')
	return (
		<div className={navbarStyles.searchBar}>
			<form
				onSubmit={e => {
					e.preventDefault()
					handleSearch(query, products)
					router.push({ pathname: '/searchResults', query: query })
				}}>
				<input
					type='text'
					value={query}
					onChange={e => {
						setQuery(e.target.value)
					}}
				/>
			</form>
		</div>
	)
}

export default SearchBar
