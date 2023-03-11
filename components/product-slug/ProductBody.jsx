import { urlFor } from '@/lib/client'
import Image from 'next/image'
import RatingIcon from '@/components/product-slug/RatingIcon'
import { useStateContext } from '@/context/StateContext'
import ProductCarousel from '@/components/product-slug/ProductCarousel'
import QuickSpecs from './QuickSpecs'

const ProductBody = ({ product, productStyles, enchanceImage }) => {
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

	return (
		<>
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
							style={{ width: '70%', height: 'auto' }}
						/>
					</div>
					<div className={productStyles.imageTiles}>
						<ProductCarousel
							productStyles={productStyles}
							product={product}
						/>
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
							{`${product.rating}/5`} {/* Icons to show star rating out of 5 */}
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
