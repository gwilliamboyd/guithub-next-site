import { useState, useEffect } from 'react'

const QuickSpecs = ({ product, productStyles }) => {
	const [productType, setProductType] = useState(null)

	useEffect(() => {
		if (product._type == 'guitar') {
			setProductType('guitar')
		}
		if (product._type == 'amp') {
			setProductType('amp')
		}
		if (product._type == 'effect') {
			setProductType('effect')
		}
		if (product._type == 'accessorie') {
			setProductType('accessorie')
		}
	})

	const capitalizeValue = s => {
		const stringValue = s.toString()
		const result = stringValue.charAt(0).toUpperCase() + stringValue.slice(1)
		return result
	}

	return (
		<>
			<span className={productStyles.quickSpecs}>Quick Specs:</span>
			{/* GUITARS */}
			{productType == 'guitar' && (
				<div className={productStyles.quickSpecsList}>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.bodyMaterial}
						</span>{' '}
						Body
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.neckMaterial}
						</span>{' '}
						Neck
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.pickupType == 'humbucker'
								? 'Humbucking'
								: 'Single-coil'}
						</span>{' '}
						{'Pickups'}
					</div>
					<div>{product.techSpecs.bridge}</div>
				</div>
			)}
			{/* AMPS */}
			{productType == 'amp' && (
				<div className={productStyles.quickSpecsList}>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{capitalizeValue(product.techSpecs.amp_Type)}
						</span>{' '}
						Amplification
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.power}W
						</span>{' '}
						Total Power
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.pickupType == 'humbucker'
								? 'Humbucking'
								: 'Single-coil'}
						</span>{' '}
						{'Pickups'}
					</div>
					<div>{product.techSpecs.bridge}</div>
				</div>
			)}
			{/* EFFECTS */}
			{productType == 'effect' && (
				<div className={productStyles.quickSpecsList}>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.bodyMaterial}
						</span>{' '}
						Body
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.neckMaterial}
						</span>{' '}
						Neck
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.pickupType == 'humbucker'
								? 'Humbucking'
								: 'Single-coil'}
						</span>{' '}
						{'Pickups'}
					</div>
					<div>{product.techSpecs.bridge}</div>
				</div>
			)}
			{/* ACCESSORIES */}
			{productType == 'accessorie' && (
				<div className={productStyles.quickSpecsList}>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.bodyMaterial}
						</span>{' '}
						Body
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.neckMaterial}
						</span>{' '}
						Neck
					</div>
					<div>
						<span className={productStyles.emphasizedSpec}>
							{product.techSpecs.pickupType == 'humbucker'
								? 'Humbucking'
								: 'Single-coil'}
						</span>{' '}
						{'Pickups'}
					</div>
					<div>{product.techSpecs.bridge}</div>
				</div>
			)}
		</>
	)
}

export default QuickSpecs
