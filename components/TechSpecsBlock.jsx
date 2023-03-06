const TechSpecsBlock = ({ effect, productStyles }) => {
	const techSpecsArray = Object.entries(effect.techSpecs)
	console.log(techSpecsArray[0][0])
	return (
		<div className={productStyles.techSpecsBlock}>
			<span className={productStyles.techSpecsBlockHeading}>General</span>
			<div className={productStyles.techSpecsTable}>
				{techSpecsArray.map(spec => (
					<div className={productStyles.techSpecRow}>
						<span className={productStyles.rowHeading}>{spec[0]}</span>
						<span className={productStyles.rowText}>{spec[1]}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TechSpecsBlock
