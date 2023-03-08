import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export const GuitarCard = ({ product, categoryStyles }) => {
	const [isGuitar, setIsGuitar] = useState(false)
	const [isAmp, setIsAmp] = useState(false)

	/* 	function determineGuitars() {
		if (product._type == 'guitar') {
			setIsGuitar(true)
			setIsAmp(false)
			console.log(`Is Guitar`)
		} else if (product._type == 'amp') {
			setIsAmp(true)
			setIsGuitar(false)
			console.log('Is Amp')
		} else {
			console.log('Is neither')
			return null
		}
	}
	useEffect(() => {
		determineGuitars()
	}) */
	// const x = true
	return (
		<div className={categoryStyles.guitarCard}>
			<Link
				href={{ pathname: `/${product._type}s/[slug]` }}
				as={`/${product._type}s/${product.slug.current}`}
				legacyBehavior>
				<a>
					<div className={categoryStyles.guitarCard}>
						<Image
							src={urlFor(product.image[0]).url()}
							width={0}
							height={0}
							sizes='100vw'
							style={{
								maxWidth: '250px',
								width: 'auto',
								maxHeight: '350px',
								height: 'auto',
							}}
							alt={product.name}
						/>
						<b>{product.name}</b>
						<b className={categoryStyles.guitarPrice}>${product.price}</b>
					</div>
				</a>
			</Link>
		</div>
	)
}
