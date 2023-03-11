import ProductCarouselImage from './ProductCarouselImage'

const ProductCarousel = ({ product, productStyles }) => {
	return (
		<div className={productStyles.productCarousel}>
			<ProductCarouselImage
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
			/>
		</div>
	)
}

export default ProductCarousel
