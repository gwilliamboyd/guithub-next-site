import { useMemo } from 'react'
import { useRouter, Router } from 'next/router'
import { client } from '@/lib/client'
import { GuitarCard } from '@/components/GuitarCard'
import searchStyles from '../styles/Search.module.css'
import categoryStyles from '../styles/Category.module.css'

const searchResults = ({ guitars, amps }) => {
	const router = useRouter()
	const query = Object.keys(router.query)[0]
	console.log(query)

	const filteredGuitars = useMemo(() => {
		return guitars.filter(guitar =>
			Object.values(guitar)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [guitars, query])
	return (
		<>
			<div className={searchStyles.searchMaster}>
				<h1>Search Results:</h1>
				<div className={searchStyles.resultsContainer}>
					{filteredGuitars?.map(guitar => (
						<GuitarCard
							key={guitar._id}
							categoryStyles={categoryStyles}
							guitar={guitar}
						/>
					))}
				</div>
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
