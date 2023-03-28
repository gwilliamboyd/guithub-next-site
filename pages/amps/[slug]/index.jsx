import { client } from '@/lib/client'
import productStyles from '../../../styles/Product.module.css'
import { useState, useEffect, useRef } from 'react'
import { useStateContext } from '@/context/StateContext'
import ProductBody from '@/components/product-slug/ProductBody'
import ProductDescription from '@/components/product-slug/ProductDescription'
import TechSpecs from '@/components/product-slug/TechSpecs'
import ImageModal from '@/components/product-slug/ImageModal'

const Amp = ({ amp }) => {
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

	// Refs
	let imageRef = useRef(null)
	let scrollRef = useRef(null)

	// State
	const [imageOpen, setImageOpen] = useState(false)
	const [imageContent, setImageContent] = useState(null)
	const [imageIndex, setImageIndex] = useState(0)

	const enchanceImage = i => {
		setImageOpen(true)
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
	}, [])

	return (
		<>
			<title>{`GuitHub | ${amp.name}`}</title>
			<div className={productStyles.productMaster}>
				{imageOpen && (
					<ImageModal
						imageRef={imageRef}
						scrollRef={scrollRef}
						product={amp}
						productStyles={productStyles}
						imageIndex={imageIndex}
						enchanceImage={enchanceImage}
						scrollPrevious={scrollPrevious}
						scrollNext={scrollNext}
					/>
				)}
				<p className={productStyles.productHeading}>{amp.name}</p>
				<ProductBody
					product={amp}
					productStyles={productStyles}
					enchanceImage={enchanceImage}
				/>
				<ProductDescription
					product={amp}
					productStyles={productStyles}
				/>
				<TechSpecs
					product={amp}
					productStyles={productStyles}
				/>
			</div>
		</>
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
