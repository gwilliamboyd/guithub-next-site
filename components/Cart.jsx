import cartStyles from '../styles/Cart.module.css'
import { useContext } from 'react'
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
	return (
		<>
			<div className={cartStyles.cartMaster}>
				<b>Shopping Cart</b>
				<div className={cartStyles.cartBody}></div>
				<button
					className={cartStyles.checkoutButton}
					onClick={() => console.log('checkout button clicked')}>
					Checkout
				</button>
			</div>
		</>
	)
}

export default Cart
