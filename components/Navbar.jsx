// Next.js utilities
import Link from 'next/link'
import Image from 'next/image'
// Components
import NavbarLink from './NavbarLink'
import SocialIcon from './SocialIcon'
// Stylesheet
import navbarStyles from '../styles/Navbar.module.css'
// Images & icons
import guithubLogo from '../public/images/guithub-logo-white.png'
import instagramIcon from '@/public/images/instagram-icon-white.svg'
import youtubeIcon from '@/public/images/youtube-icon-white.svg'
import reverbIcon from '@/public/images/reverb-icon-white.svg'
import shoppingCartIcon from '@/public/images/shopping-cart.svg'
import SearchBar from './SearchBar'
import { set } from 'mongoose'

const Navbar = ({ query, setQuery, guitars }) => {
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
				<SearchBar
					navbarStyles={navbarStyles}
					query={query}
					setQuery={setQuery}
					guitars={guitars}
				/>
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
						<NavbarLink
							navbarStyles={navbarStyles}
							name='Accessories'
							destination='/accessories'
						/>
					</ul>
					<ul className={navbarStyles.socialsLinks}>
						<SocialIcon iconUrl={instagramIcon} />
						<SocialIcon iconUrl={youtubeIcon} />
						<SocialIcon iconUrl={reverbIcon} />
					</ul>
					<Link
						legacyBehavior
						href='#'>
						<a className={navbarStyles.cartIcon}>
							<Image
								src={shoppingCartIcon}
								width={35}
								height={35}
								alt='View your cart'
							/>
						</a>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
