import { useState } from 'react'
import SubMenuItem from './SubmenuItem'

const FilterItem = ({ filterStyles, text, effects }) => {
	const [query, setQuery] = useState('')
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<span className={filterStyles.filterItem}>
			<span
				className={filterStyles.filterItemText}
				onMouseEnter={() => setMenuOpen(!menuOpen)}
				onMouseLeave={() => setMenuOpen(!menuOpen)}>
				{text}
				{menuOpen && (
					<div className={filterStyles.subMenu}>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Distortion'}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Overdrive'}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Chorus'}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Phaser'}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Flanger'}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Wah'}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Reverb'}
						/>
						<SubMenuItem
							filterStyles={filterStyles}
							text={'Delay'}
						/>
					</div>
				)}
			</span>
		</span>
	)
}

export default FilterItem
