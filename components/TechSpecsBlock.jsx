const TechSpecsBlock = ({ product, productStyles }) => {
	// Puts Sanity tech specs array into an array readable by component
	const techSpecsArray = Object.entries(product.techSpecs)

	// Formats key names from Sanity to be readable on Tech Specs table
	// This helps to automatically generate all the names
	const formatKey = s => {
		const spaceResult = s.replace('_', ' ')

		const finalResult = spaceResult.split(' ')
		for (let i = 0; i < finalResult.length; i++) {
			finalResult[i] = finalResult[i][0].toUpperCase() + finalResult[i].slice(1)
		}
		const result = finalResult.join(' ')
		return result
	}
	// Formats value names for Tech Specs table
	const capitalizeValue = s => {
		const stringValue = s.toString()
		const result = stringValue.charAt(0).toUpperCase() + stringValue.slice(1)
		return result
	}

	return (
		<div className={productStyles.techSpecsBlock}>
			<span className={productStyles.techSpecsBlockHeading}>General</span>
			<div className={productStyles.techSpecsTable}>
				{techSpecsArray.map(spec => (
					<div className={productStyles.techSpecRow}>
						<span className={productStyles.rowHeading}>
							{/* {spec[0]} */}
							{formatKey(spec[0])}
						</span>
						<span className={productStyles.rowText}>
							{/* {formatKey(spec[1])} */}
							{/* {spec[1].toString()} */}
							{capitalizeValue(spec[1])}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TechSpecsBlock
