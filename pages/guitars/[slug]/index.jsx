import { client, urlFor } from '@/lib/client'
import Image from 'next/image'
import RatingIcon from '@/components/RatingIcon'
import productStyles from '../../../styles/Product.module.css'
// import { useContext, useEffect } from 'react'
import { useStateContext } from '@/context/StateContext'
import ProductCarousel from '@/components/ProductCarousel'
import TechSpecsBlock from '@/components/TechSpecsBlock'

const Guitar = ({ guitar }) => {
	// console.log(guitar.techSpecs)
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

	const addToCart = async () => {
		await setCartOpen(true)
		onAdd(guitar, qty)
	}

	/* 
	const techSpecsArray = [
		guitar.guitarType,
		guitar.isAnalog,
		guitar.powerRequirements,
	] */

	return (
		<div className={productStyles.productMaster}>
			<p className={productStyles.productHeading}>{guitar.name}</p>
			<div className={productStyles.productBody}>
				<div className={productStyles.bodyImages}>
					<div className={productStyles.mainImage}>
						<Image
							src={urlFor(guitar.image[0]).url()}
							width={0}
							height={0}
							alt={guitar.name}
							sizes='100vw'
							style={{ width: '70%', height: 'auto' }}
						/>
					</div>
					<div className={productStyles.imageTiles}>
						<ProductCarousel
							productStyles={productStyles}
							product={guitar}
						/>
					</div>
				</div>
				<div className={productStyles.bodyText}>
					<div className={productStyles.bodyRowOne}>
						<span className={productStyles.ourPrice}>Our Price:</span>
						<span className={productStyles.price}>{`$${guitar.price}`}</span>
					</div>
					<div className={productStyles.bodyRowTwo}>
						<span className={productStyles.ourRating}>Rating:</span>
						<span className={productStyles.rating}>
							{`${guitar.rating}/5`} {/* Icons to show star rating out of 5 */}
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
							<div>Humbuckers broh!</div>
							<div>
								{' '}
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
							{guitar.productDescriptionHeading}
						</span>
						<br />
						{guitar.productDescription[0].children[0].text}
					</p>
				</div>
			</div>
			<div className={productStyles.techSpecs}>
				<span className={productStyles.techSpecsHeading}>Tech Specs</span>
				<div className={productStyles.techSpecsBody}>
					<TechSpecsBlock
						product={guitar}
						productStyles={productStyles}
					/>
				</div>
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
