import { client } from '@/lib/client'
import homeStyles from '../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { motion, useScroll, MotionCofig, stagger } from 'framer-motion'
// Hero Banner Imports
// Guitars
import redBgImg from '@/public/images/banner-guitar-red-bg.png'
import blackBgImg from '@/public/images/banner-guitar-black-bg.png'
import prsImg from '@/public/images/banner-guitar-prs.png'
// import explorerBgImg from '@/public/images/banner-guitar-explorer.png'
// import schecterBgImg from '@/public/images/banner-guitar-syn.png'

import prsFull from '@/public/images/prs-full.png'
import explorerFull from '@/public/images/banner-guitar-explorer.png'
import schecterFull from '@/public/images/banner-guitar-syn.png'
import marshallFull from '@/public/images/marshall-full.png'
import orangeFull from '@/public/images/orange-rockerverb-full.png'
import mesaFull from '@/public/images/mesa-full.png'
import phase90Full from '@/public/images/phase-90-full.png'
import paulGilbertFull from '@/public/images/paul-gilbert-full.png'
import afterneathFull from '@/public/images/afterneath-full.png'
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
	const [isMobile, setIsMobile] = useState(false)

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

	/* 	const motionContainer = {
		on: { transition: { staggerChildren: 5, repeat: Infinity } },
	}
	const motionItem = {
		on: { opacity: 1 },
	} */

	// Rotating carousel - vanilla React solution

	const [index, setIndex] = useState(0)

	const changeImageSrc = (n, m) => {
		let result = n % m

		// Return a positive value
		return result >= 0 ? result : result + m
	}
	let timer
	const setRandomTimer = (minimum = 3000, maximum = 6000) => {
		let difference = maximum - minimum
		let random = Math.random()
		random = Math.floor(random * difference)
		random += minimum
		return random
	}

	// Change index every 5 seconds
	useEffect(() => {
		setTimeout(() => {
			setIndex((index + 1) % guitarsImages.length)
			setIndex((index + 1) % ampsImages.length)
			setIndex((index + 1) % effectsImages.length)
		}, 5000)
	}, [index])

	// Detect whether site is being viewed on mobile
	useEffect(() => {
		console.log('mobile')
		const contentWatcher = window.matchMedia('(max-width: 600px)')
		setIsMobile(contentWatcher.matches)

		function updateIsMobile(e) {
			setIsMobile(e.matches)
		}
		if (contentWatcher.addEventListener) {
			contentWatcher.addEventListener('change', updateIsMobile)
			return function cleanup() {
				contentWatcher.removeEventListener('change', updateIsMobile)
			}
		} else {
			contentWatcher.addListener(updateIsMobile)
			return function cleanup() {
				contentWatcher.removeListener(updateIsMobile)
			}
		}
	})

	// Guitars image src's
	const guitarsImages = [
		{
			id: '1',
			image: prsFull,
		},
		{
			id: '2',
			image: explorerFull,
		},
		{
			id: '3',
			image: schecterFull,
		},
	]
	// Amps image src's
	const ampsImages = [
		{
			id: '1',
			image: marshallFull,
		},
		{
			id: '2',
			image: orangeFull,
		},
		{
			id: '3',
			image: mesaFull,
		},
	]
	// Effects image src's
	const effectsImages = [
		{
			id: '1',
			image: phase90Full,
		},
		{
			id: '2',
			image: paulGilbertFull,
		},
		{
			id: '3',
			image: afterneathFull,
		},
	]

	return (
		<>
			<title>GuitHub | Home | Committed to Excellence!</title>
			<div className={homeStyles.homeMaster}>
				{/* BANNER - GUITAR */}
				<div
					ref={guitarRef}
					className={homeStyles.guitarHero}>
					<div className={homeStyles.guitarLeftColumn}>
						{/* Guitars text */}
						<span
							className={homeStyles.guitarsText}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 0.85 }}>
							Guitars
						</span>
						{/* Guitars button */}
						<button
							className={homeStyles.browseButton}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 0.85 }}>
							<Link
								legacyBehavior
								href={'/guitars'}>
								<a>Plug In!</a>
							</Link>
						</button>
					</div>
					<div className={homeStyles.guitarRightColumn}>
						{guitarsImages.map((img, i) => {
							const indexLeft = changeImageSrc(index - 1, guitarsImages.length)
							const indexRight = changeImageSrc(index + 1, guitarsImages.length)

							let className = 'image'

							if (i === index) {
								className = 'image image--active'
							} else if (i === indexRight) {
								className = 'image image--right'
							} else if (i === indexLeft) {
								className = 'image image--left'
							} else className = 'image'

							return (
								<Image
									key={img.id}
									className={className}
									src={img.image}
									width={0}
									height={0}
									sizes='100vw'
									style={
										isMobile
											? { width: '200px', height: 'auto' }
											: { width: '23%', height: 'auto' }
									}
								/>
							)
						})}
					</div>
				</div>
				{/* BANNER - AMP */}
				<div
					ref={ampRef}
					className={homeStyles.ampHero}>
					<div className={homeStyles.ampLeftColumn}>
						{ampsImages.map((img, i) => {
							const indexLeft = changeImageSrc(index - 1, ampsImages.length)
							const indexRight = changeImageSrc(index + 1, ampsImages.length)

							let className = 'image'

							if (i === index) {
								className = 'image image--active'
							} else if (i === indexRight) {
								className = 'image image--right'
							} else if (i === indexLeft) {
								className = 'image image--left'
							} else className = 'image'

							return (
								<Image
									key={img.id}
									className={className}
									src={img.image}
									width={0}
									height={0}
									sizes='100vw'
									style={
										isMobile
											? { width: '300px', height: 'auto' }
											: { width: '60%', height: 'auto' }
									}
								/>
							)
						})}
					</div>
					<div className={homeStyles.ampRightColumn}>
						{/* amps text */}
						<span
							className={homeStyles.ampsText}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 0.85 }}>
							Amplifiers
						</span>
						{/* amps button */}
						<button
							className={homeStyles.browseButtonAmp}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 0.85 }}>
							<Link
								legacyBehavior
								href={'/amps'}>
								<a>Crank It Up!</a>
							</Link>
						</button>
					</div>
				</div>
				{/* BANNER - EFFECT */}
				<div
					ref={effectRef}
					className={homeStyles.effectHero}>
					<div className={homeStyles.effectLeftColumn}>
						{/* effects text */}
						<span
							className={homeStyles.effectText}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 0.85 }}>
							Effects Pedals
						</span>
						{/* effects button */}
						<button
							className={homeStyles.browseButtonEffect}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 0.85 }}>
							<Link
								legacyBehavior
								href={'/effects'}>
								<a>Browse Here</a>
							</Link>
						</button>
					</div>
					<div className={homeStyles.effectRightColumn}>
						{effectsImages.map((img, i) => {
							const indexLeft = changeImageSrc(index - 1, effectsImages.length)
							const indexRight = changeImageSrc(index + 1, effectsImages.length)

							let className = 'image'

							if (i === index) {
								className = 'image image--active'
							} else if (i === indexRight) {
								className = 'image image--right'
							} else if (i === indexLeft) {
								className = 'image image--left'
							} else className = 'image'

							return (
								<Image
									key={img.id}
									className={className}
									src={img.image}
									width={0}
									height={0}
									sizes='100vw'
									style={
										isMobile
											? { width: '235px', height: 'auto' }
											: { width: '34%', height: 'auto' }
									}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</>
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
