import { useState, useMemo } from 'react'
import { useRouter, Router } from 'next/router'
import { client } from '@/lib/client'
import Navbar from '@/components/Navbar'
import { GuitarCard } from '@/components/GuitarCard'
import searchStyles from '../styles/Search.module.css'
import categoryStyles from '../styles/Category.module.css'
import { useStateContext } from '@/context/StateContext'
// import Router from 'next/router'

const searchResults = ({ guitars, amps }) => {
	const router = useRouter()
	console.log(router.query)
	// console.log(query)
	// const { handleSearch } = useStateContext()
	const query = router.query
	// const queryResults = handleSearch
	/* 	const filteredGuitars = useMemo(() => {
		return guitars.filter(guitar =>
			Object.values(guitar)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [guitars, query]) */
	return (
		<>
			<div className={searchStyles.searchMaster}>Search results:</div>
			<div className={searchStyles.resultsContainer}>
				{guitars.map(guitar => (
					<div key={guitar._id}>{guitar.name}</div>
				))}
			</div>
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
