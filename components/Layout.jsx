import { useState, useMemo } from 'react'
import Navbar from './Navbar'
import styles from '@/styles/Layout.module.css'
const Layout = ({ children, guitars }) => {
	// const guitPerPage = 4

	// State declaration
	const [query, setQuery] = useState('')

	// Search bar
	const filteredGuitars = useMemo(() => {
		return guitars?.filter(guitar =>
			Object.values(guitar)
				.map(String)
				.some(v => v.toLowerCase().includes(query.toLowerCase()))
		)
	}, [guitars, query])
	// Set guitars per page
	// let firstIndex = 0
	// let lastIndex

	/*	const nextPage = () => {
		setFirstIndex(lastIndex)
		setLastIndex(lastIndex + guitPerPage)
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	}
 	const currentGuitars = useMemo(() => {
		if (firstIndex > 8) {
			console.log('end of list')
			return
		} else {
			return filteredGuitars.slice(firstIndex, lastIndex)
		}
	}, [filteredGuitars, firstIndex, lastIndex])
 */

	return (
		<>
			<Navbar
				query={query}
				setQuery={setQuery}
				guitars={guitars}
			/>
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	)
}

export default Layout

export async function getStaticProps() {
	const guitars = await client.fetch(`*[_type == "guitar"]`)
	// const guitars = await res.json()

	return {
		props: {
			guitars,
		},
	}
}
