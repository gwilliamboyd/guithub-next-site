import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'

export const GuitarCard = ({ guitar }) => {
	return (
		<Link
			href={{ pathname: '/guitars/[slug]' }}
			as={`/guitars/${guitar.slug.current}`}
			legacyBehavior>
			<a>
				<div
					className='guitar-card'
					key={guitar.slug.current}>
					<b>{guitar.name}</b>
					<img
						src={urlFor(guitar.image).url()}
						width={250}
						height={'auto'}
					/>
				</div>
			</a>
		</Link>
	)
}
