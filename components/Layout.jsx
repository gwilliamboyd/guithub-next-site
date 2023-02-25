import { useState, useMemo } from 'react'
import Navbar from './Navbar'
import styles from '@/styles/Layout.module.css'
const Layout = ({ children }) => {
	return (
		<>
			<Navbar guitars={guitars} />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	)
}

export default Layout
