import FilterItem from '@/components/product-filter/FilterItem'
// Styles
import filterStyles from '../../styles/Filter.module.css'

const FilterMenu = ({ effects, query, setQuery }) => {
	return (
		<div className={filterStyles.filterContainer}>
			<div className={filterStyles.filterMaster}>
				<FilterItem
					filterStyles={filterStyles}
					text={'Brand'}
					effects={effects}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Effect Type'}
					effects={effects}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Analog/Digital'}
					effects={effects}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Power Requirements'}
					effects={effects}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Rating'}
					effects={effects}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Pricing'}
					effects={effects}
					query={query}
					setQuery={setQuery}
				/>
			</div>
		</div>
	)
}

export default FilterMenu
