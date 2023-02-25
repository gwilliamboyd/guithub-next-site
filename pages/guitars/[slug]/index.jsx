import { client, urlFor } from '@/lib/client'

const Guitar = ({ guitar }) => {
	return (
		<>
			<div>
				<h1>{guitar.name}</h1>
				<img
					src={urlFor(guitar.image).url()}
					width={300}
					height={'auto'}
				/>
				<br />
				<h2>Product Description</h2>
				<br />
				<p>
					<b>Body Material: </b>
					{guitar.bodyMaterial}
				</p>
				{/* Need to find property to display for block text */}
				{/* <p>{guitar.productDescription.block}</p> */}
			</div>
		</>
	)
}

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "guitar" && slug.current == '${slug}'][0]`
	const guitarsQuery = '*[_type == "guitar"]'

	const guitar = await client.fetch(query)
	const guitars = await client.fetch(guitarsQuery)
	console.log(guitar)

	return {
		props: {
			guitars,
			guitar,
		},
	}
}
export const getStaticPaths = async () => {
	const query = `*[_type == "guitar"] {
			slug {
				current
			}
		}`
	const guitars = await client.fetch(query)
	const paths = guitars.map(guitar => ({
		params: {
			slug: guitar.slug.current,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export default Guitar
