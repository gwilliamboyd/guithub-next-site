import { client, urlFor } from '@/lib/client'
import Image from 'next/image'
import RatingIcon from '@/components/RatingIcon'
import productStyles from '../../../styles/Product.module.css'
// import { useContext, useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'
import ProductCarousel from '@/components/ProductCarousel'
import TechSpecsBlock from '@/components/TechSpecsBlock'

const Amp = ({ amp }) => {
	// console.log(amp.techSpecs)
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
		onRemove,
		toggleCartItemQuantity,
	} = useStateContext()

	const addToCart = async () => {
		await setCartOpen(true)
		onAdd(amp, qty)
	}

	/* 
	const techSpecsArray = [
		amp.ampType,
		amp.isAnalog,
		amp.powerRequirements,
	] */

	return (
		<div className={productStyles.productMaster}>
			<p className={productStyles.productHeading}>{amp.name}</p>
			<div className={productStyles.productBody}>
				<div className={productStyles.bodyImages}>
					<div className={productStyles.mainImage}>
						<Image
							src={urlFor(amp.image[0]).url()}
							width={0}
							height={0}
							alt={amp.name}
							sizes='100vw'
							style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
						/>
					</div>
					<div className={productStyles.imageTiles}>
						<ProductCarousel
							productStyles={productStyles}
							product={amp}
						/>
					</div>
				</div>
				<div className={productStyles.bodyText}>
					<div className={productStyles.bodyRowOne}>
						<span className={productStyles.ourPrice}>Our Price:</span>
						<span className={productStyles.price}>{`$${amp.price}`}</span>
					</div>
					<div className={productStyles.bodyRowTwo}>
						<span className={productStyles.ourRating}>Rating:</span>
						<span className={productStyles.rating}>
							{`${amp.rating}/5`} {/* Icons to show star rating out of 5 */}
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
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
								<span className={productStyles.shippingPrice}>$229.99</span>
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
						<span className={productStyles.quickSpecs}>Quick Specs:</span>
						<div className={productStyles.quickSpecsList}>
							<div>
								<span className={productStyles.emphasizedSpec}>Chorus</span>{' '}
								Effect
							</div>
							<div>{amp.power} W</div>
							<div>
								<span className={productStyles.emphasizedSpec}>9V </span>Power
								Required
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={productStyles.productDescription}>
				<span className={productStyles.prodDescHeading}>
					Product Description
				</span>
				<div className={productStyles.prodDescBody}>
					<p className={productStyles.prodDescText}>
						<span className={productStyles.prodDescTextHeading}>
							{amp.productDescriptionHeading}
						</span>
						<br />
						{amp.productDescription[0].children[0].text}
					</p>
				</div>
			</div>
			<div className={productStyles.techSpecs}>
				<span className={productStyles.techSpecsHeading}>Tech Specs</span>
				<div className={productStyles.techSpecsBody}>
					<TechSpecsBlock
						product={amp}
						productStyles={productStyles}
					/>
				</div>
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
