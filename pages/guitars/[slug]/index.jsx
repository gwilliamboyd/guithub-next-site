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
	// const guitars = await res.json()
	console.log(guitar)

	return {
		props: {
			guitars,
			guitar,
		},
	}
}
/* export async function getStaticProps(context) {
	const guitars = await client.fetch(`*[_type == "guitar"]`)
	// const guitars = await res.json()
	console.log(guitars)

	return {
		props: {
			guitars,
		},
	}
} */

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

	// const guitars = await res.json()
	// console.log(guitars)
	return {
		paths,
		fallback: false,
	}
}
/* export const getStaticPaths = async () => {
	const guitars = await fetch(
		`https://ggll893a.api.sanity.io/v2023-02-14[_type == "guitar"]`
	)
	// const guitars = await res.json()
	// console.log(guitars)
	for (const [key, value] of Object.entries(guitars)) {
		console.log(`${key}: ${value}`)
	}
	const slugs = guitars.map(gtr => gtr.slug)
	// console.log(slugs)
	const paths = slugs.map(slug => ({ params: { slug: slug.toString() } }))

	return {
		paths,
		fallback: false,
	}
} */

export default Guitar
