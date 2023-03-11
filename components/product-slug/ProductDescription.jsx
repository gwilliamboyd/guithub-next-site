import React from 'react'

const ProductDescription = ({ product, productStyles }) => {
	return (
		<div className={productStyles.productDescription}>
			<span className={productStyles.prodDescHeading}>Product Description</span>
			<div className={productStyles.prodDescBody}>
				<p className={productStyles.prodDescText}>
					<span className={productStyles.prodDescTextHeading}>
						{product.productDescriptionHeading}
					</span>
					<br />
					{product.productDescription[0].children[0].text}
				</p>
			</div>
		</div>
	)
}

export default ProductDescription
