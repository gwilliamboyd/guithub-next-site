import { useEffect, useState } from 'react'
// import SubMenuItem from './SubmenuItem'

const FilterItem = ({ effects, filterStyles, text, query, setQuery }) => {
	/* 	const getAttribute = attr => {
		const attributeArray = []

		const attributes = effects.map(product => {
			let value = product.brand
			attributeArray.push(value)
			return attributeArray
		})
		console.log(attributes[0])
		// return attributes
	}
	useEffect(() => {
		// console.log(effects)
		getAttribute(text.toLowerCase())
	}, []) */
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<span className={filterStyles.filterItem}>
			<span
				className={filterStyles.filterItemText}
				onMouseEnter={() => setMenuOpen(!menuOpen)}
				onMouseLeave={() => setMenuOpen(!menuOpen)}>
				{text}
				{/* {menuOpen && (
					<div className={filterStyles.subMenu}>
						{query !== '' && (
							<span className={filterStyles.subMenuItem}>
								<span
									className={filterStyles.subMenuItemText}
									onClick={() => setQuery('')}>
									Clear Filters
								</span>
							</span>
						)}
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Distortion'}
							query={query}
							setQuery={setQuery}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Overdrive'}
							query={query}
							setQuery={setQuery}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Chorus'}
							query={query}
							setQuery={setQuery}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Phaser'}
							query={query}
							setQuery={setQuery}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Flanger'}
							query={query}
							setQuery={setQuery}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Wah'}
							query={query}
							setQuery={setQuery}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Reverb'}
							query={query}
							setQuery={setQuery}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Delay'}
							query={query}
							setQuery={setQuery}
						/>
					</div>
				)} */}
			</span>
		</span>
	)
}

export default FilterItem
