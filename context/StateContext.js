import { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
	const [cartItems, setCartItems] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [totalQuantities, setTotalQuantities] = useState(0)
	const [qty, setQty] = useState(1)

	let foundProduct
	let index

	// Add item to cart
	const onAdd = (product, quantity) => {
		const checkCartProduct = cartItems.find(item => item._id === product._id)
		setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
		setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity)

		if (checkCartProduct) {
			const updatedCartItems = cartItems.map(cartItem => {
				if (cartItem._id === product._id)
					return {
						...cartItem,
						quantity: cartItem.quantity + quantity,
					}
			})
			setCartItems(updatedCartItems)
		} else {
			product.quantity = quantity
			setCartItems([...cartItems, { ...product }])
		}
	}

	// Remove item from cart
	const onRemove = product => {
		foundProduct = cartItems.find(item => item._id === product._id)
		const newCartItems = cartItems.filter(item => item._id !== product._id)

		setTotalPrice(
			prevTotalPrice =>
				prevTotalPrice - foundProduct.price * foundProduct.quantity
		)
		setTotalQuantities(
			prevTotalQuantities => prevTotalQuantities - foundProduct.quantity
		)
		setCartItems(newCartItems)
	}

	const toggleCartItemQuantity = (id, value) => {
		foundProduct = cartItems.find(item => item._id === id)
		index = cartItems.findIndex(product => product._id === id)
		const newCartItems = cartItems.filter(item => item._id !== id)

		if (value === 'inc') {
			setCartItems([
				...newCartItems,
				{ ...foundProduct, quantity: foundProduct.quantity + 1 },
			])
			setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
			setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
		} else if (value === 'dec') {
			if (foundProduct.quantity > 1) {
				setCartItems([
					...newCartItems,
					{ ...foundProduct, quantity: foundProduct.quantity - 1 },
				])
				setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price)
				setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
			}
		}
	}

	const incQty = () => {
		console.log('increase qty')
		setQty(prevQty => prevQty + 1)
	}
	const decQty = () => {
		setQty(prevQty => {
			if (prevQty - 1 < 1) return 1

			console.log('decrease qty')
			return prevQty - 1
		})
	}

	return (
		<Context.Provider
			value={{
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
				incQty,
				decQty,
				onAdd,
				toggleCartItemQuantity,
				onRemove,
				setCartItems,
				setTotalPrice,
				setTotalQuantities,
			}}>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)
