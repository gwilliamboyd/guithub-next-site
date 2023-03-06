const TechSpecsBlock = ({ effect, productStyles }) => {
	// Puts Sanity tech specs array into an array readable by component
	const techSpecsArray = Object.entries(effect.techSpecs)

	// Formats key names from Sanity to be readable on Tech Specs table
	// This helps to automatically generate all the names
	const formatKey = s => {
		const spaceResult = s.replace('_', ' ')

		const finalResult = spaceResult.split(' ')
		for (let i = 0; i < finalResult.length; i++) {
			finalResult[i] = finalResult[i][0].toUpperCase() + finalResult[i].slice(1)
		}
		const result = finalResult.join(' ')
		console.log(result)
		return result
	}
	// Formats value names for Tech Specs table
	const capitalizeValue = s => {
		const result = s.charAt(0).toUpperCase() + s.slice(1)
		return result
	}

	return (
		<div className={productStyles.techSpecsBlock}>
			<span className={productStyles.techSpecsBlockHeading}>General</span>
			<div className={productStyles.techSpecsTable}>
				{techSpecsArray.map(spec => (
					<div className={productStyles.techSpecRow}>
						<span className={productStyles.rowHeading}>
							{formatKey(spec[0])}
						</span>
						<span className={productStyles.rowText}>
							{capitalizeValue(spec[1][0])}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TechSpecsBlock
