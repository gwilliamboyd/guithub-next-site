import { useState, useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'
import { useRouter } from 'next/router'
import SearchIcon from './svgs/SearchIcon'

const SearchBar = ({ navbarStyles, products }) => {
	const router = useRouter()
	const { handleSearch } = useStateContext()
	const [query, setQuery] = useState('')
	// enter key didn't seem to be working until today
	// will retest if needed
	/* const handleEnterKey = key => {
		document.addEventListener('keydown', key => {
			if (key === 'Enter') {
				console.log('metallica')
			}
		})
	} */
	return (
		<div className={navbarStyles.searchBar}>
			<form
				onSubmit={e => {
					e.preventDefault()
					handleSearch(query, products)
					router.push({ pathname: '/searchResults', query: query })
				}}>
				<input
					className={navbarStyles.input}
					type='text'
					value={query}
					onChange={e => {
						setQuery(e.target.value)
					}}
					// onKeyDown={e => handleEnterKey(e.target.value)}
				/>
			</form>
			<span
				onClick={() => {
					handleSearch(query, products)
					router.push({ pathname: '/searchResults', query: query })
				}}>
				<SearchIcon />
			</span>
		</div>
	)
}

export default SearchBar
