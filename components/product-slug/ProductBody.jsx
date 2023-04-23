import { urlFor } from '@/lib/client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import RatingIcon from '@/components/product-slug/RatingIcon'
import { useStateContext } from '@/context/StateContext'
import ProductCarousel from '@/components/product-slug/ProductCarousel'
import QuickSpecs from './QuickSpecs'
import ImageModal from './ImageModal'

const ProductBody = ({ product, productStyles }) => {
	console.log(`Product Type: ${product._type}`)
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
		qty,
		setQty,
		toggleCartItemQuantity,
	} = useStateContext()

	const addToCart = async () => {
		await setCartOpen(true)
		onAdd(product, qty)
	}

	// Refs
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
				console.log('modal close')
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

	function handleCarouselClick() {}

	useEffect(() => {
		closeImage()
	}, [])

	let iconsArray = []
	const numberOfIcons = rating => {
		for (let i = 0; i < rating; i++) {
			iconsArray.push(i)
		}
		console.log(iconsArray)
		return iconsArray
	}
	useEffect(() => {
		numberOfIcons(product.rating)
	}, [])

	return (
		<>
			{imageOpen && (
				<ImageModal
					imageOpen={imageOpen}
					setImageOpen={setImageOpen}
					imageIndex={imageIndex}
					setImageIndex={setImageIndex}
					imageRef={imageRef}
					scrollRef={scrollRef}
					product={product}
					productStyles={productStyles}
					enchanceImage={enchanceImage}
					scrollPrevious={scrollPrevious}
					scrollNext={scrollNext}
				/>
			)}
			<div className={productStyles.productBody}>
				<div className={productStyles.bodyImages}>
					<div
						className={productStyles.mainImage}
						onClick={enchanceImage}>
						<Image
							src={urlFor(product.image[0]).url()}
							width={0}
							height={0}
							alt={product.name}
							sizes='100vw'
							style={{ width: '100%', height: 'auto' }}
						/>
					</div>
					<div className={productStyles.imageTiles}>
						<div className={productStyles.productCarousel}>
							<div className={productStyles.carouselImage}>
								<Image
									src={urlFor(product.image[1]).url()}
									width={0}
									height={0}
									alt={product.name}
									sizes='100vw'
									style={{
										maxWidth: '80px',
										width: '100%',
										maxHeight: '120px',
										height: 'auto',
									}}
								/>
							</div>
							<div className={productStyles.carouselImage}>
								<Image
									src={urlFor(product.image[2]).url()}
									width={0}
									height={0}
									alt={product.name}
									sizes='100vw'
									style={{
										maxWidth: '80px',
										width: '100%',
										maxHeight: '120px',
										height: 'auto',
									}}
								/>
							</div>
							<div className={productStyles.carouselImage}>
								<Image
									src={urlFor(product.image[3]).url()}
									width={0}
									height={0}
									alt={product.name}
									sizes='100vw'
									style={{
										maxWidth: '80px',
										width: '100%',
										maxHeight: '120px',
										height: 'auto',
									}}
								/>
							</div>
							<div className={productStyles.carouselImage}>
								<Image
									src={urlFor(product.image[4]).url()}
									width={0}
									height={0}
									alt={product.name}
									sizes='100vw'
									style={{
										maxWidth: '80px',
										width: '100%',
										maxHeight: '120px',
										height: 'auto',
									}}
								/>
							</div>
							<div className={productStyles.carouselImage}>
								<Image
									src={urlFor(product.image[5]).url()}
									width={0}
									height={0}
									alt={product.name}
									sizes='100vw'
									style={{
										maxWidth: '80px',
										width: '100%',
										maxHeight: '120px',
										height: 'auto',
									}}
								/>
							</div>
							{/* <ProductCarouselImage
				product={product}
				imageIndex={1}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={2}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={3}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={4}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={5}
				productStyles={productStyles}
			/> */}
						</div>
					</div>
				</div>
				<div className={productStyles.bodyText}>
					<div className={productStyles.bodyRowOne}>
						<span className={productStyles.ourPrice}>Our Price:</span>
						<span className={productStyles.price}>{`$${product.price}`}</span>
					</div>
					<div className={productStyles.bodyRowTwo}>
						<span className={productStyles.ourRating}>Rating:</span>
						<span className={productStyles.rating}>
							{`${product.rating}/5`}
							{/* Icons to show star rating out of 5 */}
							{/*<p>{iconsArray.forEach(item => console.log(item))}</p>
							 <RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon /> */}
						</span>
					</div>
					<div className={productStyles.bodyRowThree}>
						<div className={productStyles.addButton}>
							<button
								className={productStyles.addToCart}
								onClick={addToCart}>
								Add To Cart
							</button>
						</div>
						<div className={productStyles.shippingInfo}>
							<div className={productStyles.shippingCost}>
								Shipping:{' '}
								<span className={productStyles.shippingPrice}>FREE!</span>
							</div>
							<div className={productStyles.usaCanada}>
								1-2 Weeks (USA and Canada)
							</div>
							<div className={productStyles.international}>
								3-4 Weeks (International)
							</div>
						</div>
					</div>
					<div className={productStyles.bodyRowFour}>
						<QuickSpecs
							product={product}
							productStyles={productStyles}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductBody
