import { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
	const [cartItems, setCartItems] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [totalQuantities, setTotalQuantities] = useState(0)
	const [qty, setQty] = useState(1)
	// const [query, setQuery] = useState('')
	const [results, setResults] = useState([])
	const [products, setProducts] = useState([])

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

	// Increase quantity of items added to the cart
	const incQty = () => {
		console.log('increase qty')
		setQty(prevQty => prevQty + 1)
	}

	// Decrease quantity of items added to the cart
	const decQty = () => {
		setQty(prevQty => {
			if (prevQty - 1 < 1) return 1

			console.log('decrease qty')
			return prevQty - 1
		})
	}

	// Take in query from search bar
	const handleSearch = (query, products) => {
		const searchResults = products.filter(product =>
			Object.values(product)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
		console.log(searchResults)
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
				handleSearch,
			}}>
			{children}
		</Context.Provider>
	)
}

// Import this variable in components to access all contexts
export const useStateContext = () => useContext(Context)

export const getServerSideProps = async () => {
	const guitarQuery = '*[_type == "guitar"]'
	const guitars = await client.fetch(guitarQuery)

	const ampQuery = '*[_type == "amp"]'
	const amps = await client.fetch(ampQuery)

	return {
		props: { guitars, amps },
	}
}
