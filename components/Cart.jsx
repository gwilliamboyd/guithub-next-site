import cartStyles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'
import getStripe from '@/lib/getStripe'

const Cart = () => {
	const {
		cartItems,
		totalPrice,
		totalQuantities,
		setCartItems,
		setTotalPrice,
		setTotalQuantities,
		qty,
		setQty,
		onRemove,
		toggleCartItemQuantity,
	} = useStateContext()

	useEffect(() => {
		console.log(totalPrice)
		console.log(totalQuantities)
	}, [totalPrice, totalQuantities])
	useEffect(() => {
		console.log(cartItems)
	}, [cartItems])

	// Set total cart price from Local Storage cart items
	/* 	const totalCartPriceLocal = cartFromLocalStorage => {
		const localCartPriceArray = cartFromLocalStorage.map(
			x => x.price * x.quantity
		)
		const localCartTotal = localCartPriceArray.reduce((a, b) => {
			return a + b
		}, 0)
		return localCartTotal
	}

	useEffect(() => console.log(cartItems))

	// Get Local Storage cart items on each page load
	useEffect(() => {
		const cartFromLocalStorage = JSON.parse(
			localStorage.getItem('cart') || '[]'
		)
		setCartItems(cartFromLocalStorage)
		setTotalPrice(totalCartPriceLocal(cartFromLocalStorage))
		toggleCartItemQuantity(cartFromLocalStorage)
	}, [])

	// Put each item added to cart in Local Storage cart array
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems))
	}, [cartItems]) */

	const handleCheckout = async () => {
		const stripe = await getStripe()

		const response = await fetch('/api/stripe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartItems),
		})

		if (response.statusCode === 500) return

		const data = await response.json()

		stripe.redirectToCheckout({ sessionId: data.id })
	}

	return (
		<div className={cartStyles.cartMaster}>
			<div className={cartStyles.cartContainer}>
				<b>Shopping Cart</b>
				<div className={cartStyles.cartBody}>
					{cartItems.map(item => (
						<div
							key={item._id}
							className={cartStyles.cartEntry}>
							<Image
								src={urlFor(item.image[0]).url()}
								width={0}
								height={0}
								sizes='100vw'
								style={{
									maxWidth: '71px',
									width: 'auto',
									height: 'auto',
								}}
								alt={`${item.name}`}
								className={cartStyles.cartEntryImage}
							/>
							<div className={cartStyles.cartEntryBody}>
								<span className={cartStyles.cartEntryName}>{item.name}</span>
								<div className={cartStyles.cartEntryInfo}>
									<span className={cartStyles.cartEntryPrice}>
										{`$${item.price}`}
									</span>
									<span
										className={
											cartStyles.itemQuantity
										}>{`Qty: ${item.quantity}`}</span>
								</div>
							</div>
							<button
								className={cartStyles.removeButton}
								onClick={() => onRemove(item)}>
								X
							</button>
						</div>
					))}
				</div>
				<div className={cartStyles.cartTotalPrice}>
					Total:{' '}
					<span className={cartStyles.cartTotalPriceNumber}>
						{`$${totalPrice.toFixed(2)}`}
					</span>
				</div>
				<button
					className={cartStyles.checkoutButton}
					onClick={handleCheckout}>
					Checkout
				</button>
			</div>
		</div>
	)
}

export default Cart
