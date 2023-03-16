import { urlFor } from '@/lib/client'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const ImageModal = ({
	imageRef,
	scrollRef,
	product,
	productStyles,
	imageIndex,
	enchanceImage,
	scrollPrevious,
	scrollNext,
}) => {
	return (
		<div
			ref={imageRef}
			className={productStyles.imageModal}
			onClick={enchanceImage}>
			{/* Prev Button */}
			<button
				ref={scrollRef}
				className={[
					productStyles.scrollButton,
					productStyles.previousButton,
				].join(' ')}
				onClick={scrollPrevious}>
				Prev
			</button>
			<Image
				src={urlFor(product.image[imageIndex]).url()}
				width={0}
				height={0}
				alt={product.name}
				sizes='100vw'
				style={{ width: 'min(100%, 500px)', height: 'auto' }}
			/>
			{/* Next Button */}
			<button
				ref={scrollRef}
				className={[productStyles.scrollButton, productStyles.nextButton].join(
					' '
				)}
				onClick={scrollNext}>
				Next
			</button>
		</div>
	)
}

export default ImageModal
