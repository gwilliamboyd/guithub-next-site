import Link from 'next/link'
const NavbarLink = ({ navbarStyles, name }) => {
	return (
		<li>
			<Link
				legacyBehavior
				href='#'>
				<a className={navbarStyles.navbarLink}>{name}</a>
			</Link>
		</li>
	)
}

export default NavbarLink
