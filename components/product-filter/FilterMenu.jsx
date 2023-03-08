import FilterItem from '@/components/product-filter/FilterItem'
// Styles
import filterStyles from '../../styles/Filter.module.css'

const FilterMenu = ({ effects }) => {
	return (
		<div className={filterStyles.filterContainer}>
			<div className={filterStyles.filterMaster}>
				<FilterItem
					filterStyles={filterStyles}
					text={'Brand'}
					effects={effects}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Effect Type'}
					effects={effects}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Analog/Digital'}
					effects={effects}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Power Requirements'}
					effects={effects}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Rating'}
					effects={effects}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Pricing'}
					effects={effects}
				/>
			</div>
		</div>
	)
}

export default FilterMenu
