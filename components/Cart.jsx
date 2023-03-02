import cartStyles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

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

	// setCartItems(cartFromLocalStorage)

	useEffect(() => {
		persistCartFromLocal()
	}, [])

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
