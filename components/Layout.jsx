import Navbar from './Navbar'
import styles from '@/styles/Layout.module.css'
const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{/* <Cart /> */}
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	)
}

export default Layout
