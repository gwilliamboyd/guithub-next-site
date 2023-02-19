import Link from 'next/link'
const NavbarLink = ({ navbarStyles, name, destination }) => {
	return (
		<li>
			<Link
				legacyBehavior
				href={`${destination}`}>
				<a className={navbarStyles.navbarLink}>{name}</a>
			</Link>
		</li>
	)
}

export default NavbarLink
