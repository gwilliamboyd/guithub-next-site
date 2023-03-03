import { client, urlFor } from '@/lib/client'
import Image from 'next/image'
import productStyles from '../../../styles/Product.module.css'
import { useContext, useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'

const Guitar = ({ guitar }) => {
	const {
		cartOpen,
		cartItems,
		totalPrice,
		totalQuantities,
		setCartItems,
		setTotalPrice,
		setTotalQuantities,
		onAdd,
		onRemove,
		toggleCartItemQuantity,
	} = useStateContext()

	const handleClick = e => {
		console.log('add to cart')
		onAdd(guitar, 1)
	}
	useEffect(() => {
		console.log(guitar)
		console.log(guitar.productDescription[0].children[0].text)
	}, [])
	return (
		<div className={productStyles.productMaster}>
			<div className={productStyles.productBody}>
				<p className={productStyles.productHeading}>{guitar.name}</p>
				<Image
					src={urlFor(guitar.image).url()}
					width={300}
					height={450}
					alt={guitar.name}
				/>
				<button
					className={productStyles.addToCart}
					onClick={handleClick}>
					Add To Cart
				</button>
				<h2>Product Description</h2>
				<p className={productStyles.prodDesc}>
					{guitar.productDescription[0].children[0].text}
				</p>
				{/* <p>{Object.values(guitar.productDescription)}</p> */}
				<p>
					<b>Body Material: </b>
					{guitar.bodyMaterial}
				</p>
				{/* Need to find property to display for block text */}
			</div>
		</div>
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
