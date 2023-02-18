import Image from 'next/image'
import NavbarLink from './NavbarLink'
import navbarStyles from '../styles/Navbar.module.css'
import guithubLogo from '../public/images/guithub-logo-white.png'
import SocialIcon from './SocialIcon'
import instagramIcon from '@/public/images/instagram-icon-white.svg'
import youtubeIcon from '@/public/images/youtube-icon-white.svg'
import reverbIcon from '@/public/images/reverb-icon-white.svg'
const Navbar = () => {
	return (
		<header className={navbarStyles.header}>
			<nav className={navbarStyles.nav}>
				<div className={navbarStyles.storeLogo}>
					<Image
						src={guithubLogo}
						width={150}
						height={33}
					/>
				</div>
				<div className={navbarStyles.rightLinks}>
					<ul className={navbarStyles.productLinks}>
						<NavbarLink
							navbarStyles={navbarStyles}
							name='Guitars'
						/>
						<NavbarLink
							navbarStyles={navbarStyles}
							name='Amps'
						/>
						<NavbarLink
							navbarStyles={navbarStyles}
							name='Effects'
						/>
						<NavbarLink
							navbarStyles={navbarStyles}
							name='Accessories'
						/>
					</ul>
					<ul className={navbarStyles.socialsLinks}>
						<SocialIcon iconUrl={instagramIcon} />
						<SocialIcon iconUrl={youtubeIcon} />
						<SocialIcon iconUrl={reverbIcon} />
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
