import Image from 'next/image'
import NavbarLink from './NavbarLink'
import navbarStyles from '../styles/Navbar.module.css'
import guithubLogo from '../public/images/guithub-logo-white.png'
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
						<li>FB</li>
						<li>Rv</li>
						<li>YT</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
