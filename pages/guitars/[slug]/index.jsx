import { client, urlFor } from '@/lib/client'
import Image from 'next/image'
import RatingIcon from '@/components/product-slug/RatingIcon'
import productStyles from '../../../styles/Product.module.css'
// import { useContext, useEffect } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useStateContext } from '@/context/StateContext'
// import ProductCarousel from '@/components/ProductCarousel'
// import TechSpecsBlock from '@/components/product-slug/TechSpecsBlock'
import ProductBody from '@/components/product-slug/ProductBody'
import ProductDescription from '@/components/product-slug/ProductDescription'
import TechSpecs from '@/components/product-slug/TechSpecs'
import ImageModal from '@/components/product-slug/ImageModal'

const Guitar = ({ guitar }) => {
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
		<div className={productStyles.productMaster}>
			{imageOpen && (
				<ImageModal
					imageRef={imageRef}
					scrollRef={scrollRef}
					product={guitar}
					productStyles={productStyles}
					imageIndex={imageIndex}
					enchanceImage={enchanceImage}
					scrollPrevious={scrollPrevious}
					scrollNext={scrollNext}
				/>
			)}
			<p className={productStyles.productHeading}>{guitar.name}</p>
			<ProductBody
				product={guitar}
				productStyles={productStyles}
				enchanceImage={enchanceImage}
			/>
			<ProductDescription
				product={guitar}
				productStyles={productStyles}
			/>
			<TechSpecs
				product={guitar}
				productStyles={productStyles}
			/>
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
