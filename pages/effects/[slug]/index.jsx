import { client } from '@/lib/client'
import productStyles from '../../../styles/Product.module.css'
import { useState, useEffect, useRef } from 'react'
import { useStateContext } from '@/context/StateContext'
import ProductBody from '@/components/product-slug/ProductBody'
import ProductDescription from '@/components/product-slug/ProductDescription'
import TechSpecs from '@/components/product-slug/TechSpecs'
import ImageModal from '@/components/product-slug/ImageModal'

const Effect = ({ effect }) => {
	const {
		cartOpen,
		setCartOpen,
		cartItems,
		totalPrice,
		totalQuantities,
		setCartItems,
		setTotalPrice,
		setTotalQuantities,
		onAdd,
		onRemove,
		qty,
		setQty,
		toggleCartItemQuantity,
	} = useStateContext()

	/* // Refs
	let imageRef = useRef(null)
	let scrollRef = useRef(null)

	// State
	const [imageOpen, setImageOpen] = useState(false)
	const [imageContent, setImageContent] = useState(null)
	const [imageIndex, setImageIndex] = useState(0)

	const enchanceImage = i => {
		setImageOpen(true)
		console.log(`Index: ${imageIndex}`)
		setImageIndex(imageIndex)
		setImageContent(i)
	}

	const closeImage = () => {
		document.addEventListener('mousedown', e => {
			if (imageRef.current == null || scrollRef.current == null) {
				return
			}
			if (!imageRef.current.contains(e.target)) {
				setImageOpen(false)
				setImageIndex(0)
			}
		})
	}

	const scrollPrevious = () => {
		if (imageIndex == 0) {
			return
		} else {
			setImageIndex(imageIndex - 1)
		}
	}
	const scrollNext = () => {
		if (imageIndex == 5) {
			return
		} else {
			setImageIndex(imageIndex + 1)
		}
	}

	useEffect(() => {
		closeImage()
	}, []) */

	return (
		<div className={productStyles.productMaster}>
			{/* {imageOpen && (
				<ImageModal
					imageRef={imageRef}
					scrollRef={scrollRef}
					product={effect}
					productStyles={productStyles}
					imageIndex={imageIndex}
					enchanceImage={enchanceImage}
					scrollPrevious={scrollPrevious}
					scrollNext={scrollNext}
				/>
			)} */}
			<p className={productStyles.productHeading}>{effect.name}</p>
			<ProductBody
				product={effect}
				productStyles={productStyles}
			/>
			<ProductDescription
				product={effect}
				productStyles={productStyles}
			/>
			<TechSpecs
				product={effect}
				productStyles={productStyles}
			/>
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
