import Image from 'next/image'
import Link from 'next/link'

import footerStyles from '@/styles/Footer.module.css'

import SocialIcon from './SocialIcon'
import NavbarLink from './NavbarLink'

import guithubLogo from '@/public/images/guithub-logo-white.png'
import instagramIcon from '@/public/images/instagram-icon-white.svg'
import youtubeIcon from '@/public/images/youtube-icon-white.svg'
import reverbIcon from '@/public/images/reverb-icon-white.svg'

const Footer = () => {
	return (
		<div className={footerStyles.footerMaster}>
			<div className={footerStyles.footerContainer}>
				<div className={footerStyles.logoSocials}>
					<Image
						src={guithubLogo}
						width={150}
						height={33}
					/>
					<div className={footerStyles.socials}>
						<SocialIcon iconUrl={instagramIcon} />
						<SocialIcon iconUrl={youtubeIcon} />
						<SocialIcon iconUrl={reverbIcon} />
					</div>
					<div className={footerStyles.address}>
						1234 Rockin' Road
						<br />
						Cleveland, OH 44114
					</div>
				</div>
				<div className={footerStyles.siteMap}>
					<Link
						legacyBehavior
						href='/'>
						<a className={footerStyles.sitemapLink}>Home Page</a>
					</Link>
					<Link
						legacyBehavior
						href='/guitars'>
						<a className={footerStyles.sitemapLink}>Guitars</a>
					</Link>
					<Link
						legacyBehavior
						href='/amps'>
						<a className={footerStyles.sitemapLink}>Amps</a>
					</Link>
					<Link
						legacyBehavior
						href='/effects'>
						<a className={footerStyles.sitemapLink}>Effects</a>
					</Link>
				</div>
				<div className={footerStyles.credits}>
					<div className={footerStyles.copyright}>
						Copyright 2023
						<br />
						All rights reserved
					</div>
					<div>
						Site designed and developed by G William Boyd
						<br />
						All photographs from Sweetwater.com
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
