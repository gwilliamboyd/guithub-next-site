import { urlFor } from '@/lib/client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import CaretLeft from '../svgs/CaretLeft'
import CaretRight from '../svgs/CaretRight'
//hello
const ImageModal = ({
	imageOpen,
	setImageOpen,
	imageIndex,
	setImageIndex,
	imageRef,
	scrollRef,
	product,
	productStyles,
	enchanceImage,
	scrollPrevious,
	scrollNext,
}) => {
	console.log(product._type)

	const [isAmp, setIsAmp] = useState(false)

	const determineAmp = product => {
		if (product._type === 'amp') {
			setIsAmp(true)
		}
	}
	const closeImageModal = () => {
		setImageOpen(false)
		setImageIndex(0)
	}

	useEffect(() => {
		determineAmp(product)
	}, [])

	return (
		<div
			className={productStyles.imageModalMaster}
			ref={imageRef}>
			<span
				className={productStyles.closeButton}
				onClick={closeImageModal}>
				X
			</span>
			<div className={productStyles.imageModal}>
				{/* Prev Button */}
				{/* <button
					ref={scrollRef}
					className={[
						productStyles.scrollButton,
						productStyles.previousButton,
					].join(' ')}
					onClick={scrollPrevious}>
					Prev
				</button> */}
				<CaretLeft
					ref={scrollRef}
					width={50}
					height={50}
					fill='white'
					scrollPrevious={scrollPrevious}
				/>
				<Image
					src={urlFor(product.image[imageIndex]).url()}
					width={0}
					height={0}
					alt={product.name}
					sizes='100vw'
					style={
						isAmp
							? { width: 'min(100%, 720px)', height: 'auto' }
							: { width: 'min(100%, 500px)', height: 'auto' }
					}
				/>
				{/* Next Button */}
				{/* <button
					ref={scrollRef}
					className={[
						productStyles.scrollButton,
						productStyles.nextButton,
					].join(' ')}
					onClick={scrollNext}>
					Next
				</button> */}
				<CaretRight
					ref={scrollRef}
					width={50}
					height={50}
					fill='white'
					scrollNext={scrollNext}
				/>
			</div>
		</div>
	)
}

export default ImageModal
