import { urlFor } from '@/lib/client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import CaretLeft from '../svgs/CaretLeft'
import CaretRight from '../svgs/CaretRight'
import { useSwipeable } from 'react-swipeable'

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
	const [isMobile, setIsMobile] = useState(false)
	const [isTablet, setIsTablet] = useState(false)

	const determineAmp = product => {
		if (product._type === 'amp') {
			setIsAmp(true)
		}
	}
	// Detect if tablet version
	useEffect(() => {
		const contentWatcher = window.matchMedia('(max-width: 900px)')
		setIsTablet(contentWatcher.matches)

		function updateIsTablet(e) {
			setIsTablet(e.matches)
		}
		if (contentWatcher.addEventListener) {
			contentWatcher.addEventListener('change', updateIsTablet)
			return function cleanup() {
				contentWatcher.removeEventListener('change', updateIsTablet)
			}
		} else {
			contentWatcher.addListener(updateIsTablet)
			return function cleanup() {
				contentWatcher.removeListener(updateIsTablet)
			}
		}
	})
	// Detect if mobile version
	useEffect(() => {
		const contentWatcher = window.matchMedia('(max-width: 600px)')
		setIsMobile(contentWatcher.matches)

		function updateIsMobile(e) {
			setIsMobile(e.matches)
		}
		if (contentWatcher.addEventListener) {
			contentWatcher.addEventListener('change', updateIsMobile)
			return function cleanup() {
				contentWatcher.removeEventListener('change', updateIsMobile)
			}
		} else {
			contentWatcher.addListener(updateIsMobile)
			return function cleanup() {
				contentWatcher.removeListener(updateIsMobile)
			}
		}
	})

	const imageSwipe = useSwipeable({
		preventScrollOnSwipe: true,
		onSwipedLeft: () => scrollNext(),
		onSwipedRight: () => scrollPrevious(),
	})

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
			<div
				className={productStyles.imageModal}
				{...imageSwipe}>
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
				{!isMobile && (
					<CaretLeft
						ref={scrollRef}
						width={isTablet ? 40 : 50}
						height={isTablet ? 40 : 50}
						fill='white'
						scrollPrevious={scrollPrevious}
					/>
				)}
				<img
					src={urlFor(product.image[imageIndex]).url()}
					alt={product.name}
					className={isAmp ? productStyles.ampImg : productStyles.modalImg}
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
				{!isMobile && (
					<CaretRight
						ref={scrollRef}
						width={isTablet ? 40 : 50}
						height={isTablet ? 40 : 50}
						fill='white'
						scrollNext={scrollNext}
					/>
				)}
			</div>
		</div>
	)
}

export default ImageModal
