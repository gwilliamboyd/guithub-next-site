import Image from 'next/image'
import prsHero from '@/public/images/PRS-Hero_black.jpg'

const HeroCarousel = ({ categoryStyles }) => {
	return (
		<div className={categoryStyles.heroCarousel}>
			<Image
				src={prsHero}
				width={830}
				height={429}
			/>
		</div>
	)
}

export default HeroCarousel
