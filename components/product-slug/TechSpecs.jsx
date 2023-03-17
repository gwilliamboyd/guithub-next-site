const TechSpecs = ({ product, productStyles }) => {
	// Puts Sanity Tech Specs array into an array readable by component
	const techSpecsArray = Object.entries(product.techSpecs)

	// Formats VALUE names for Tech Specs table
	const capitalizeValue = s => {
		const stringValue = s.toString()
		const result = stringValue.charAt(0).toUpperCase() + stringValue.slice(1)
		return result
	}
	// Formats KEY names - no need for underscores in key name
	const formatEntry = s => {
		const stringValue = s.toString()
		// Capitalize very first character
		const result = stringValue.charAt(0).toUpperCase() + stringValue.slice(1)
		// Automatically put a space before remaining capital letters in key name
		// All key names originally written in camel case
		const finalResult = result.replace(/([A-Z])/g, ' $1').trim()

		return finalResult
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
									{formatEntry(spec[0])}
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
