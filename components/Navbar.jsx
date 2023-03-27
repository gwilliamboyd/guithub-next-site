// Next.js utilities
import Link from 'next/link'
import Image from 'next/image'
//React utilities
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// Components
import NavbarLink from './NavbarLink'
import SocialIcon from './SocialIcon'
// Stylesheet
import navbarStyles from '../styles/Navbar.module.css'
import cartStyles from '../styles/Cart.module.css'
// Images & icons
import guithubLogo from '../public/images/guithub-logo-white.png'
import guithubLogoRed from '../public/images/guithub-logo-red.png'
import instagramIcon from '@/public/images/instagram-icon-white.svg'
import youtubeIcon from '@/public/images/youtube-icon-white.svg'
import reverbIcon from '@/public/images/reverb-icon-white.svg'
// import shoppingCartIcon from '@/public/images/shopping-cart.svg'
import ShoppingCartIcon from './svgs/ShoppingCartIcon'
import BarsSolid from './svgs/BarsSolid'
import SearchBar from './SearchBar'
import Cart from './Cart'
import { useStateContext } from '@/context/StateContext'

const Navbar = ({ products, guitars, amps }) => {
	const { cartOpen, setCartOpen } = useStateContext()

	//State
	const [isMobile, setIsMobile] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [currentColor, setCurrentColor] = useState('var(--light-font-color)')
	const [width, setWidth] = useState(30)
	const [height, setHeight] = useState(30)

	useEffect(() => {
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

	return (
		<>
			<header className={navbarStyles.header}>
				<nav className={navbarStyles.nav}>
					<div className={navbarStyles.storeLogo}>
						<Link
							legacyBehavior
							href='/'>
							<a>
								<Image
									src={guithubLogo}
									width={isMobile ? 100 : 150}
									height={isMobile ? 22 : 33}
									alt='GuitHub'
								/>
							</a>
						</Link>
					</div>
					<div className={navbarStyles.searchElements}>
						<SearchBar
							navbarStyles={navbarStyles}
							products={products}
							// amps={amps}
						/>
					</div>
					<div className={navbarStyles.rightLinks}>
						<ul className={navbarStyles.productLinks}>
							<NavbarLink
								navbarStyles={navbarStyles}
								name='Guitars'
								destination='/guitars'
							/>
							<NavbarLink
								navbarStyles={navbarStyles}
								name='Amps'
								destination='/amps'
							/>
							<NavbarLink
								navbarStyles={navbarStyles}
								name='Effects'
								destination='/effects'
							/>
							{/* <NavbarLink
							navbarStyles={navbarStyles}
							name='Accessories'
							destination='/accessories'
						/> */}
						</ul>
						{/* <ul className={navbarStyles.socialsLinks}>
						<SocialIcon iconUrl={instagramIcon} />
						<SocialIcon iconUrl={youtubeIcon} />
						<SocialIcon iconUrl={reverbIcon} />
					</ul> */}
						<Link
							legacyBehavior
							href='#'>
							<a
								className={navbarStyles.cartIcon}
								onClick={() => {
									setCartOpen(!cartOpen)
								}}>
								{/* <Image
								src={ShoppingCartIcon}
								width={35}
								height={35}
								alt='View your cart'
							/> */}
								<ShoppingCartIcon
									currentColor={currentColor}
									width={width}
									height={height}
								/>
							</a>
						</Link>

						{isMobile && (
							<span onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
								<BarsSolid />
							</span>
						)}
						{mobileMenuOpen && (
							<motion.div
								className={navbarStyles.mobileMenuMaster}
								initial={{ width: 0, height: 0 }}
								animate={{ width: 'auto', height: 'auto' }}>
								<span className={navbarStyles.mobileMenuRow}>
									<Link
										legacyBehavior
										href={'/guitars'}>
										<a>Guitars</a>
									</Link>
								</span>
								<span className={navbarStyles.mobileMenuRow}>
									<Link
										legacyBehavior
										href={'/amps'}>
										<a>Amps</a>
									</Link>
								</span>
								<span className={navbarStyles.mobileMenuRow}>
									<Link
										legacyBehavior
										href={'/effects'}>
										<a>Effects</a>
									</Link>
								</span>
							</motion.div>
						)}
					</div>
				</nav>
			</header>
			{cartOpen && <Cart cartStyles={cartStyles} />}
		</>
	)
}

export default Navbar
