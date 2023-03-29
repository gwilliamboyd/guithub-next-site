import Link from 'next/link'
import Image from 'next/image'
const SocialIcon = ({ iconUrl, width, height }) => {
	return (
		<>
			<li>
				<Link
					legacyBehavior
					href='#'>
					<a>
						<Image
							priority
							src={iconUrl}
							width={width}
							height={height}
							alt='Insta'
						/>
					</a>
				</Link>
			</li>
		</>
	)
}

export default SocialIcon
