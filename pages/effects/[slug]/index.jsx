import { client, urlFor } from '@/lib/client'
import Image from 'next/image'
import productStyles from '../../../styles/Product.module.css'
import { useContext, useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'

const Effect = ({ effect }) => {
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

	return (
		<div className={productStyles.productMaster}>
			<div className={productStyles.productBody}>
				<p className={productStyles.productHeading}>{effect.name}</p>
				<Image
					src={urlFor(effect.image).url()}
					width={0}
					height={0}
					alt={effect.name}
					sizes='100vw'
					style={{ width: '300px', height: 'auto' }}
				/>
				<button
					className={productStyles.addToCart}
					onClick={() => onAdd(effect, 1)}>
					Add To Cart
				</button>
				<h2>Product Description</h2>
				<p className={productStyles.prodDesc}>
					{effect.productDescription[0].children[0].text}
				</p>
				{/* <p>{Object.values(effect.productDescription)}</p> */}
				<p>
					<b>Body Material: </b>
					{effect.bodyMaterial}
				</p>
				{/* Need to find property to display for block text */}
			</div>
		</div>
	)
}

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "effect" && slug.current == '${slug}'][0]`
	const effectsQuery = '*[_type == "effect"]'

	const effect = await client.fetch(query)
	const effects = await client.fetch(effectsQuery)
	console.log(effect)

	return {
		props: {
			effects,
			effect,
		},
	}
}
export const getStaticPaths = async () => {
	const query = `*[_type == "effect"] {
			slug {
				current
			}
		}`
	const effects = await client.fetch(query)
	const paths = effects.map(effect => ({
		params: {
			slug: effect.slug.current,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export default Effect
