import Navbar from './Navbar'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'
const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{/* <Cart /> */}
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export default Layout
