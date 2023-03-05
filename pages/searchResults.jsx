import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { client } from '@/lib/client'
import { GuitarCard } from '@/components/GuitarCard'
import searchStyles from '../styles/Search.module.css'
import categoryStyles from '../styles/Category.module.css'

const searchResults = ({ products }) => {
	const router = useRouter()
	const query = Object.keys(router.query)[0]
	console.log(query)
	console.log(products)

	const filteredProducts = useMemo(() => {
		return products.filter(prod =>
			Object.values(prod)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [products, query])
	return (
		<>
			<div className={searchStyles.searchMaster}>
				<h1>Search Results:</h1>
				<div className={searchStyles.resultsContainer}>
					{filteredProducts?.map(product => (
						<GuitarCard
							key={product._id}
							categoryStyles={categoryStyles}
							product={product}
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
	// Combine guitars and amps into one search pool
	const products = [...guitars, ...amps]

	return {
		props: { products },
	}
}
