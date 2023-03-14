import TechSpecsBlock from './TechSpecsBlock'

const TechSpecs = ({ product, productStyles }) => {
	// Puts Sanity Tech Specs array into an array readable by component
	const techSpecsArray = Object.entries(product.techSpecs)

	// Formats KEY names from Sanity to be readable on Tech Specs table
	// Auto-generating all the names
	const formatKey = s => {
		const spaceResult = s.replace('_', ' ')

		const finalResult = spaceResult.split(' ')
		for (let i = 0; i < finalResult.length; i++) {
			finalResult[i] = finalResult[i][0].toUpperCase() + finalResult[i].slice(1)
		}
		const result = finalResult.join(' ')
		return result
	}
	// Formats VALUE names for Tech Specs table
	const capitalizeValue = s => {
		const stringValue = s.toString()
		const result = stringValue.charAt(0).toUpperCase() + stringValue.slice(1)
		return result
	}
	return (
		<div className={productStyles.techSpecs}>
			<span className={productStyles.techSpecsHeading}>Tech Specs</span>
			<div className={productStyles.techSpecsBody}>
				<div className={productStyles.techSpecsBlock}>
					<span className={productStyles.techSpecsBlockHeading}>General</span>
					<div className={productStyles.techSpecsTable}>
						{techSpecsArray.map(spec => (
							<div
								className={productStyles.techSpecRow}
								key={Object.values(spec)}>
								<span className={productStyles.rowHeading}>
									{formatKey(spec[0])}
								</span>
								<span className={productStyles.rowText}>
									{capitalizeValue(spec[1])}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TechSpecs
