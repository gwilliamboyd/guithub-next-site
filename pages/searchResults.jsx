import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { client } from '@/lib/client'
import { ProductCard } from '@/components/ProductCard'
import searchStyles from '../styles/Search.module.css'
import categoryStyles from '../styles/Category.module.css'

const searchResults = ({ products }) => {
	const router = useRouter()
	const query = Object.keys(router.query)[0]

	const filteredProducts = useMemo(() => {
		return products.filter(prod =>
			Object.values(prod)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [products, query])
	return (
		<>
			<title>GuitHub | Search Results</title>
			<div className={searchStyles.searchMaster}>
				<h1 className={searchStyles.searchHeading}>Search Results:</h1>
				<div className={searchStyles.searchContainer}>
					<div className={searchStyles.resultsContainer}>
						{filteredProducts?.map(product => (
							<ProductCard
								key={product._id}
								categoryStyles={categoryStyles}
								product={product}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default searchResults

export const getServerSideProps = async () => {
	// Guitars
	const guitarQuery = '*[_type == "guitar"]'
	const guitars = await client.fetch(guitarQuery)

	// Amps
	const ampQuery = '*[_type == "amp"]'
	const amps = await client.fetch(ampQuery)

	// Effects
	const effectQuery = '*[_type == "effect"]'
	const effects = await client.fetch(effectQuery)

	// Combine all products into one search pool
	const products = [...guitars, ...amps, ...effects]

	return {
		props: { products },
	}
}
