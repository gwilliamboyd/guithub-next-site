'use client'
import cartStyles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'

const Cart = () => {
	const {
		cartOpen,
		cartItems,
		totalPrice,
		persistCartFromLocal,
		totalQuantities,
		setCartItems,
		setTotalPrice,
		setTotalQuantities,
		onAdd,
		onRemove,
		toggleCartItemQuantity,
	} = useStateContext()

	// Set total cart price from Local Storage cart items
	const totalCartPriceLocal = cartFromLocalStorage => {
		const localCartPriceArray = cartFromLocalStorage.map(x => x.price)
		const localCartTotal = localCartPriceArray.reduce((a, b) => {
			return a + b
		}, 0)
		console.log(localCartTotal)
		return localCartTotal
	}

	// Get Local Storage cart items on each page load
	useEffect(() => {
		const cartFromLocalStorage = JSON.parse(
			localStorage.getItem('cart') || '[]'
		)
		setCartItems(cartFromLocalStorage)
		setTotalPrice(totalCartPriceLocal(cartFromLocalStorage))
	}, [])

	// Put each item added to cart in Local Storage cart array
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems))
	}, [cartItems])

	/* 	function handleRemoveClick() {
		console.log('on remove')
		onRemove(item)
	} */

	return (
		<>
			<div className={cartStyles.cartMaster}>
				<div className={cartStyles.cartContainer}>
					<b>Shopping Cart</b>
					<div className={cartStyles.cartBody}>
						{cartItems.map(item => (
							<div
								key={item.key}
								className={cartStyles.cartEntry}>
								<Image
									src={urlFor(item?.image).url()}
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
