import Image from 'next/image'
import ratingIcon from '../public/images/hand_horns_icon.png'

const RatingIcon = () => {
	return (
		<Image
			src={ratingIcon}
			width={30}
			height={30}
			alt='Rating Icon'
		/>
	)
}

export default RatingIcon
