// Next.js utilities
import Link from 'next/link'
import Image from 'next/image'
//React utilities
import { useState } from 'react'
// Components
import NavbarLink from './NavbarLink'
import SocialIcon from './SocialIcon'
// Stylesheet
import navbarStyles from '../styles/Navbar.module.css'
import cartStyles from '../styles/Cart.module.css'
// Images & icons
import guithubLogo from '../public/images/guithub-logo-white.png'
import instagramIcon from '@/public/images/instagram-icon-white.svg'
import youtubeIcon from '@/public/images/youtube-icon-white.svg'
import reverbIcon from '@/public/images/reverb-icon-white.svg'
// import shoppingCartIcon from '@/public/images/shopping-cart.svg'
import ShoppingCartIcon from './svgs/ShoppingCartIcon'
import SearchBar from './SearchBar'
import Cart from './Cart'
import { useStateContext } from '@/context/StateContext'

const Navbar = ({ products, guitars, amps }) => {
	const { cartOpen, setCartOpen } = useStateContext()

	//State
	const [currentColor, setCurrentColor] = useState('var(--light-font-color)')
	const [width, setWidth] = useState(30)
	const [height, setHeight] = useState(30)

	return (
		<header className={navbarStyles.header}>
			<nav className={navbarStyles.nav}>
				<div className={navbarStyles.storeLogo}>
					<Link
						legacyBehavior
						href='/'>
						<a>
							<Image
								src={guithubLogo}
								width={150}
								height={33}
								alt='GuitHub'
							/>
						</a>
					</Link>
				</div>
				<div className={navbarStyles.searchElements}>
					Search products:
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
							onMouseEnter={() => {
								setCurrentColor('blue')
								setWidth(35)
								setHeight(35)
							}}
							onMouseLeave={() => {
								setCurrentColor('var(--light-font-color)')
								setWidth(30)
								setHeight(30)
							}}
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
					{cartOpen && <Cart cartStyles={cartStyles} />}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
