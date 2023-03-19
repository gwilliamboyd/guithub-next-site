import { client } from '@/lib/client'
import homeStyles from '../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { motion, useScroll } from 'framer-motion'
// Hero Banner Imports
// Guitars
import redBgImg from '@/public/images/banner-guitar-red-bg.png'
import blackBgImg from '@/public/images/banner-guitar-black-bg.png'
import prsImg from '@/public/images/banner-guitar-prs.png'
import explorerBgImg from '@/public/images/banner-guitar-explorer.png'
import schecterBgImg from '@/public/images/banner-guitar-syn.png'

import prsFull from '@/public/images/prs-full.png'
import marshallFull from '@/public/images/marshall-full.png'
import phase90Full from '@/public/images/phase-90-full.png'
// Amps
import redAmpBgImg from '@/public/images/banner-amp-red-bg.png'
import blackAmpBgImg from '@/public/images/banner-amp-black-bg.png'
import marshallAmpImg from '@/public/images/banner-amp-amp.png'

import ampRedFull from '@/public/images/banner-amp/banner-amp-red-bg.png'
import ampBlackFull from '@/public/images/banner-amp/banner-amp-black-bg.png'
import ampImg from '@/public/images/banner-amp/banner-amp-amp.png'
// Effects
import redEffectBgImg from '@/public/images/banner-effect/banner-effect-red-bg.png'
import blackEffectBgImg from '@/public/images/banner-effect/banner-effect-black-bg.png'
import afterneathImg from '@/public/images/banner-effect/banner-effect-afterneath.png'
import phase90Img from '@/public/images/banner-effect/banner-effect-phase-90.png'
import bigSkyImg from '@/public/images/banner-effect/banner-effect-bigsky.png'

export default function IndexPage({ products, guitars, amps }) {
	const [gtrs, setGtrs] = useState(guitars)
	const [amplifiers, setAmplifiers] = useState(amps)

	const guitarRef = useRef()
	const ampRef = useRef()
	const effectRef = useRef()

	// Stepped scrolling

	/* 	let prevScroll = 0

	const steppedScrolling = () => {
		document.addEventListener('scroll', () => {
			let currentScroll = window.scrollY
			console.log(window.scrollY)
			console.log(`Prev: ${prevScroll}`)
			console.log(`Current: ${currentScroll}`)

			// On scroll down, scroll to amp
			if (currentScroll > prevScroll && currentScroll < 916) {
				ampRef.current.scrollIntoView({ behavior: 'smooth' })
				prevScroll = 916
				// currentScroll = prevScroll
			}
			// On scroll down, scroll to effects
			else if (currentScroll > prevScroll && currentScroll < 1669) {
				effectRef.current.scrollIntoView({ behavior: 'smooth' })
				prevScroll = 1669
				// currentScroll = prevScroll
			}
		})
	}

	useEffect(() => {
		steppedScrolling()
	}) */

	return (
		<div className={homeStyles.homeMaster}>
			{/* BANNER - GUITAR */}
			<div
				ref={guitarRef}
				className={homeStyles.guitarHero}>
				<div className={homeStyles.guitarLeftColumn}>
					{/* Guitars text */}
					<motion.span
						className={homeStyles.guitarsText}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 0.85 }}>
						Guitars
					</motion.span>
					{/* Guitars button */}
					<motion.span
						className={homeStyles.browseButton}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 0.85 }}>
						<Link
							legacyBehavior
							href={'/guitars'}>
							<a>Plug In!</a>
						</Link>
					</motion.span>
				</div>
				<div className={homeStyles.guitarRightColumn}>
					<Image
						src={prsFull}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '250px', height: 'auto' }}
					/>
				</div>
			</div>
			{/* BANNER - AMP */}
			<div
				ref={ampRef}
				className={homeStyles.ampHero}>
				<div className={homeStyles.ampLeftColumn}>
					<Image
						src={marshallFull}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '450px', height: 'auto' }}
					/>
				</div>
				<div className={homeStyles.ampRightColumn}>
					{/* amps text */}
					<motion.span
						className={homeStyles.ampsText}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 0.85 }}>
						Amplifiers
					</motion.span>
					{/* amps button */}
					<motion.span
						className={homeStyles.browseButtonAmp}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 0.85 }}>
						<Link
							legacyBehavior
							href={'/amps'}>
							<a>Crank It Up!</a>
						</Link>
					</motion.span>
				</div>
			</div>
			{/* BANNER - EFFECT */}
			<div
				ref={effectRef}
				className={homeStyles.effectHero}>
				<div className={homeStyles.effectLeftColumn}>
					{/* effects text */}
					<motion.span
						className={homeStyles.effectText}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 0.85 }}>
						Effects Pedals
					</motion.span>
					{/* effects button */}
					<motion.span
						className={homeStyles.browseButtonEffect}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 0.85 }}>
						<Link
							legacyBehavior
							href={'/effects'}>
							<a>Browse Here</a>
						</Link>
					</motion.span>
				</div>
				<div className={homeStyles.effectRightColumn}>
					<Image
						src={phase90Full}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '300px', height: 'auto' }}
					/>
				</div>
			</div>
			{/* BANNER - AMP
			<div
				ref={ampRef}
				className={homeStyles.ampHero}>
				<motion.span
					className={homeStyles.ampsText}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.85 }}>
					Amps
				</motion.span>

				<motion.span
					className={homeStyles.browseButtonAmp}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.85 }}>
					<Link
						legacyBehavior
						href={'/amps'}>
						<a>Browse Here</a>
					</Link>
				</motion.span>
				<motion.img
					className={homeStyles.redAmpBgImg}
					initial={{ y: 1200 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.6 }}
					src={ampRedFull.src}
				/>
				<motion.img
					className={homeStyles.blackAmpBgImg}
					initial={{ x: 1650 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.15, duration: 0.6 }}
					src={ampBlackFull.src}
				/>
				<motion.img
					className={homeStyles.marshall}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.75, duration: 0.5 }}
					src={ampImg.src}
				/>
			</div>
			BANNER - EFFECT
			<div
				ref={effectRef}
				className={homeStyles.effectHero}>
				<motion.img
					className={homeStyles.redEffectBgImg}
					initial={{ y: 600 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.6 }}
					src={redEffectBgImg.src}
				/>
				<motion.img
					className={homeStyles.blackEffectBgImg}
					initial={{ x: -1650 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.15, duration: 0.6 }}
					src={blackEffectBgImg.src}
				/>
				<motion.span
					className={homeStyles.effectText}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.85 }}>
					Effects
				</motion.span>

				<motion.span
					className={homeStyles.browseButtonEffect}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.85 }}>
					<Link
						legacyBehavior
						href={'/amps'}>
						<a>Browse Here</a>
					</Link>
				</motion.span>

				<motion.img
					className={homeStyles.afterneathImg}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.85 }}
					src={afterneathImg.src}
				/>
				<motion.img
					className={homeStyles.bigSkyImg}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.85 }}
					src={bigSkyImg.src}
				/>
				<motion.img
					className={homeStyles.phase90Img}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.85 }}
					src={phase90Img.src}
				/>
			</div> */}
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
