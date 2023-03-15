import { client } from '@/lib/client'
import homeStyles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
// Hero Banner Imports
// Guitars
import redBgImg from '@/public/images/banner-guitar-red-bg.png'
import blackBgImg from '@/public/images/banner-guitar-black-bg.png'
import prsImg from '@/public/images/banner-guitar-prs.png'
import explorerBgImg from '@/public/images/banner-guitar-explorer.png'
import schecterBgImg from '@/public/images/banner-guitar-syn.png'

export default function IndexPage({ products, guitars, amps }) {
	const [gtrs, setGtrs] = useState(guitars)
	const [amplifiers, setAmplifiers] = useState(amps)
	/* 	useEffect(() => {
		console.log(gtrs)
		console.log(amplifiers)
		console.log(products)
	}) */

	return (
		<div className={homeStyles.homeMaster}>
			<div className={homeStyles.guitarHero}>
				<motion.img
					className={homeStyles.redBg}
					initial={{ y: 600 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.6 }}
					src={redBgImg.src}
				/>
				<motion.img
					className={homeStyles.blackBg}
					initial={{ x: -1650 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.15, duration: 0.6 }}
					src={blackBgImg.src}
				/>
				<motion.span
					className={homeStyles.guitarsText}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.85 }}>
					Guitars
				</motion.span>
				<motion.span
					className={homeStyles.browseButton}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.85 }}>
					Browse Here
				</motion.span>
				<motion.img
					className={homeStyles.prs}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.85 }}
					src={prsImg.src}
				/>
				<motion.img
					className={homeStyles.explorer}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.1, duration: 0.85 }}
					src={explorerBgImg.src}
				/>
				<motion.img
					className={homeStyles.schecter}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.6, duration: 0.85 }}
					src={schecterBgImg.src}
				/>
			</div>
		</div>
	)
}

export const getStaticProps = async () => {
	const guitarQuery = '*[_type == "guitar"]'
	const guitars = await client.fetch(guitarQuery)

	const ampQuery = '*[_type == "amp"]'
	const amps = await client.fetch(ampQuery)

	return {
		props: { guitars, amps },
	}
}
