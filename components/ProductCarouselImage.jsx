import Image from 'next/image'
import { urlFor } from '@/lib/client'

const ProductCarouselImage = ({ product, imageIndex, productStyles }) => {
	return (
		<div className={productStyles.carouselImage}>
			<Image
				src={urlFor(product.image[`${imageIndex}`]).url()}
				width={0}
				height={0}
				alt={product.name}
				sizes='100vw'
				style={{ width: '80px', height: 'auto' }}
			/>
		</div>
	)
}

export default ProductCarouselImage
