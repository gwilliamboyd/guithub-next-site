import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [totalQuantities, setTotalQuantities] = useState(0)
	const [qty, setQty] = useState(1)
	// const [results, setResults] = useState([])
	const [products, setProducts] = useState([])

	let foundProduct
	let index

	// Add item to cart
	const onAdd = (product, quantity) => {
		// setCartOpen(true)
		const checkCartProduct = cartItems.find(item => item._id === product._id)
		console.log(checkCartProduct)

		setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
		setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity)

		if (checkCartProduct) {
			const updatedCartItems = cartItems.map(cartItem => {
				if (cartItem._id === product._id) {
					return {
						...cartItem,
						quantity: cartItem.quantity + quantity,
					}
				} else {
					return cartItem
				}
			})
			setCartItems(updatedCartItems)
		} else {
			console.log('item not found')
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

	// Change quantity of items already in cart
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

	// Increase quantity of items to add to the cart
	const incQty = () => {
		console.log('increase qty')
		setQty(prevQty => prevQty + 1)
	}

	// Decrease quantity of items to add to the cart
	const decQty = () => {
		setQty(prevQty => {
			if (prevQty - 1 < 1) return 1

			console.log('decrease qty')
			return prevQty - 1
		})
	}
	// Take in query from search bar - DO NOT CHANGE FOR CART FUNCTIONS
	const handleSearch = query => {
		return products.filter(product =>
			Object.values(product)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}

	return (
		<Context.Provider
			value={{
				cartOpen,
				setCartOpen,
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
				handleSearch,
			}}>
			{children}
		</Context.Provider>
	)
}

// Import this variable in components to access all contexts
export const useStateContext = () => useContext(Context)

// cartOpen,
// 				setCartOpen,
// 				cartItems,
// 				totalPrice,
// 				totalQuantities,
// 				qty,
// 				incQty,
// 				decQty,
// 				onAdd,
// 				toggleCartItemQuantity,
// 				onRemove,
// 				setCartItems,
// 				setTotalPrice,
// 				setTotalQuantities,
// 				handleSearch,

// handleSearch,
// cartOpen,
// setCartOpen,
// cartProducts,
// setCartProducts,
// getProductQuantity,
// addToCart,
// removeFromCart,
// deleteAllFromCart,
// totalCost,
// getTotalCost,
/* 	const [cartOpen, setCartOpen] = useState(false)
	const [cartProducts, setCartProducts] = useState([])

	// [ { id: 1, quantity: 2 } ]
	const getProductQuantity = id => {
		const quantity = cartProducts.find(product => product.id === id)?.quantity
		if (quantity === undefined) {
			return 0
		}
		return quantity
	}

	const addToCart = id => {
		const quantity = getProductQuantity(id)
		if (quantity === 0) {
			//Product not in cart
			setCartProducts([
				...cartProducts,
				{
					id: id,
					quantity: 1,
				},
			])
		} else {
			//Product is in cart
			setCartProducts(
				cartProducts.map(product =>
					product.id === id
						? { ...product, quantity: product.quantity + 1 }
						: product
				)
			)
		}
	}
	const removeFromCart = id => {
		const quantity = getProductQuantity(id)
		if (quantity == 1) {
			deleteAllFromCart(id)
		} else {
			setCartProducts(
				cartProducts.map(product =>
					product.id === id
						? { ...product, quantity: product.quantity - 1 }
						: product
				)
			)
		}
	}
	const deleteAllFromCart = id => {
		setCartProducts(
			cartProducts =>
				cartProducts.filter(currentProduct => {
					return currentProduct.id != id
				}) // [] if obj meets condition, add obj to array
		)
	}
	let totalCost
	const getTotalCost = () => {
		totalCost = 0
		cartProducts.map(cartItem => {
			totalCost += cartItem.price * cartItem.quantity
		})
		return totalCost
	}

	 */
