import { useState } from 'react'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'

const SearchBar = ({ navbarStyles, guitars }) => {
	const router = useRouter()
	const { handleSearch } = useStateContext()
	const [query, setQuery] = useState('')
	// const [route, setRoute] = useState()
	return (
		<div className={navbarStyles.searchBar}>
			<form
				onSubmit={e => {
					e.preventDefault()
					handleSearch(query, guitars)
					// setRoute()
					router.push({ pathname: '/searchResults', query: query })
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
