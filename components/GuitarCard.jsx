import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'

export const GuitarCard = ({ guitar, categoryStyles }) => {
	return (
		<div className={categoryStyles.guitarCard}>
			<Link
				href={{ pathname: '/guitars/[slug]' }}
				as={`/guitars/${guitar.slug.current}`}
				legacyBehavior>
				<a>
					<div
						className={categoryStyles.guitarCard}
						key={guitar.slug.current}>
						<img
							src={urlFor(guitar.image).url()}
							width={250}
							height={'auto'}
						/>
						<b>{guitar.name}</b>
					</div>
				</a>
			</Link>
		</div>
	)
}
