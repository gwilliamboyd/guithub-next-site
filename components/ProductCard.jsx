import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import RatingIcon from './product-slug/RatingIcon'
import { useState, useEffect } from 'react'

export const ProductCard = ({ product, categoryStyles }) => {
	return (
		<div className={categoryStyles.productCard}>
			<Link
				href={{ pathname: `/${product._type}s/[slug]` }}
				as={`/${product._type}s/${product.slug.current}`}
				legacyBehavior>
				<a>
					<div className={categoryStyles.productCard}>
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
						<div className={categoryStyles.productInfo}>
							<b className={categoryStyles.productPrice}>${product.price}</b>
							<span className={categoryStyles.productRating}>
								{product.rating}/5 <RatingIcon />
							</span>
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}
