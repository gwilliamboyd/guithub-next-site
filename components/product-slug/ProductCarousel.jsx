import Image from 'next/image'
import { urlFor } from '@/lib/client'
// import ProductCarouselImage from './ProductCarouselImage'

const ProductCarousel = ({ product, productStyles }) => {
	return (
		<div className={productStyles.productCarousel}>
			<div className={productStyles.carouselImage}>
				<Image
					src={urlFor(product.image[1]).url()}
					width={0}
					height={0}
					alt={product.name}
					sizes='100vw'
					style={{
						maxWidth: '80px',
						width: '100%',
						maxHeight: '120px',
						height: 'auto',
					}}
				/>
			</div>
			<div className={productStyles.carouselImage}>
				<Image
					src={urlFor(product.image[2]).url()}
					width={0}
					height={0}
					alt={product.name}
					sizes='100vw'
					style={{
						maxWidth: '80px',
						width: '100%',
						maxHeight: '120px',
						height: 'auto',
					}}
				/>
			</div>
			<div className={productStyles.carouselImage}>
				<Image
					src={urlFor(product.image[3]).url()}
					width={0}
					height={0}
					alt={product.name}
					sizes='100vw'
					style={{
						maxWidth: '80px',
						width: '100%',
						maxHeight: '120px',
						height: 'auto',
					}}
				/>
			</div>
			<div className={productStyles.carouselImage}>
				<Image
					src={urlFor(product.image[4]).url()}
					width={0}
					height={0}
					alt={product.name}
					sizes='100vw'
					style={{
						maxWidth: '80px',
						width: '100%',
						maxHeight: '120px',
						height: 'auto',
					}}
				/>
			</div>
			<div className={productStyles.carouselImage}>
				<Image
					src={urlFor(product.image[5]).url()}
					width={0}
					height={0}
					alt={product.name}
					sizes='100vw'
					style={{
						maxWidth: '80px',
						width: '100%',
						maxHeight: '120px',
						height: 'auto',
					}}
				/>
			</div>
			{/* <ProductCarouselImage
				product={product}
				imageIndex={1}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={2}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={3}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={4}
				productStyles={productStyles}
			/>
			<ProductCarouselImage
				product={product}
				imageIndex={5}
				productStyles={productStyles}
			/> */}
		</div>
	)
}

export default ProductCarousel
