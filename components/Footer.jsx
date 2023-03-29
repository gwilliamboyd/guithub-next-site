import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

import footerStyles from '@/styles/Footer.module.css'

import SocialIcon from './SocialIcon'
import NavbarLink from './NavbarLink'

import guithubLogo from '@/public/images/guithub-logo-white.png'
import instagramIcon from '@/public/images/instagram-icon-white.svg'
import youtubeIcon from '@/public/images/youtube-icon-white.svg'
import reverbIcon from '@/public/images/reverb-icon-white.svg'
// SVG's
import InstagramIcon from './svgs/InstagramIcon'
import YouTubeIcon from './svgs/YouTubeIcon'
import ReverbIcon from './svgs/ReverbIcon'

const Footer = () => {
	const [currentColor, setCurrentColor] = useState('var(--light-font-color)')
	const [isMobile, setIsMobile] = useState(false)

	// Detect if mobile version
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
		<div className={footerStyles.footerMaster}>
			<div className={footerStyles.footerContainer}>
				<div className={footerStyles.logoSocials}>
					<Image
						src={guithubLogo}
						width={isMobile ? 100 : 150}
						height={isMobile ? 22 : 33}
						alt='GuitHub logo'
					/>
					<div className={footerStyles.socials}>
						<InstagramIcon
							fill={currentColor}
							width={isMobile ? 23 : 35}
							height={isMobile ? 23 : 35}
						/>
						<YouTubeIcon
							fill={currentColor}
							width={isMobile ? 23 : 35}
							height={isMobile ? 23 : 35}
						/>

						{/* <SocialIcon iconUrl={instagramIcon} /> */}
						{/* <SocialIcon iconUrl={youtubeIcon} /> */}
						<SocialIcon
							iconUrl={reverbIcon}
							width={isMobile ? 23 : 35}
							height={isMobile ? 23 : 35}
						/>
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
