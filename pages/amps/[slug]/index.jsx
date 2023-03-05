import { client, urlFor } from '@/lib/client'
import Image from 'next/image'
import productStyles from '../../../styles/Product.module.css'
import { useContext, useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'

const Amp = ({ amp }) => {
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
				<p className={productStyles.productHeading}>{amp.name}</p>
				<Image
					src={urlFor(amp.image).url()}
					width={300}
					height={450}
					alt={amp.name}
				/>
				<button
					className={productStyles.addToCart}
					onClick={() => onAdd(amp, 1)}>
					Add To Cart
				</button>
				<h2>Product Description</h2>
				<p className={productStyles.prodDesc}>
					{amp.productDescription[0].children[0].text}
				</p>
				{/* <p>{Object.values(amp.productDescription)}</p> */}
				<p>
					<b>Body Material: </b>
					{amp.bodyMaterial}
				</p>
				{/* Need to find property to display for block text */}
			</div>
		</div>
	)
}

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "amp" && slug.current == '${slug}'][0]`
	const ampsQuery = '*[_type == "amp"]'

	const amp = await client.fetch(query)
	const amps = await client.fetch(ampsQuery)
	console.log(amp)

	return {
		props: {
			amps,
			amp,
		},
	}
}
export const getStaticPaths = async () => {
	const query = `*[_type == "amp"] {
			slug {
				current
			}
		}`
	const amps = await client.fetch(query)
	const paths = amps.map(amp => ({
		params: {
			slug: amp.slug.current,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export default Amp
