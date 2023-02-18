import Link from 'next/link'
import Image from 'next/image'
const SocialIcon = ({ iconUrl }) => {
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
							width={36}
							height={36}
							alt='Insta'
						/>
					</a>
				</Link>
			</li>
		</>
	)
}

export default SocialIcon
