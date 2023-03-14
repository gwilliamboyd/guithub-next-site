import cartStyles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'

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

	return (
		<>
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
									width={67}
									height={100}
									alt={`${item.name}`}
									className={cartStyles.cartEntryImage}
								/>
								<div className={cartStyles.cartEntryName}>
									{item.name}
									<br />
									<span className={cartStyles.cartEntryPrice}>
										{`$${item.price}`}
									</span>
									<button onClick={() => onRemove(item)}>X</button>
									<br />
									<span>{`Qty: ${item.quantity}`}</span>
								</div>
							</div>
						))}
					</div>
					<div className={cartStyles.cartTotalPrice}>
						Total:{' '}
						<span className={cartStyles.cartTotalPriceNumber}>
							{`$${totalPrice}`}
						</span>
					</div>
					<button
						className={cartStyles.checkoutButton}
						onClick={() => console.log('checkout')}>
						Checkout
					</button>
				</div>
			</div>
		</>
	)
}

export default Cart
