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
		totalQuantities,
		setCartItems,
		setTotalPrice,
		setTotalQuantities,
		onAdd,
		onRemove,
		toggleCartItemQuantity,
	} = useStateContext()

	// Console log Cart Items
	useEffect(() => {
		console.log(cartItems)
	})

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
									src={urlFor(item.image).url()}
									width={67}
									height={100}
									alt={`${item.name}`}
									className={cartStyles.cartEntryImage}
								/>
								<div className={cartStyles.cartEntryName}>{item.name}</div>
							</div>
						))}
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
