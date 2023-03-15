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
					src={redBgImg.src}
				/>
				<motion.img
					className={homeStyles.blackBg}
					src={blackBgImg.src}
				/>
				<motion.span className={homeStyles.guitarsText}>Guitars</motion.span>
				<motion.span className={homeStyles.browseButton}>
					Browse Here
				</motion.span>
				<motion.img
					className={homeStyles.prs}
					src={prsImg.src}
				/>
				<motion.img
					className={homeStyles.explorer}
					src={explorerBgImg.src}
				/>
				<motion.img
					className={homeStyles.schecter}
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
