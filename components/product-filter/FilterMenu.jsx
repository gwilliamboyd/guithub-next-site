// import FilterItem from '@/components/product-filter/FilterItem'
// Styles
import filterStyles from '../../styles/Filter.module.css'

const FilterMenu = ({ effects, query, setQuery }) => {
	console.log(effects)
	return (
		<div className={filterStyles.filterContainer}>
			<div className={filterStyles.filterMaster}>
				{/* <FilterItem
					effects={effects}
					filterStyles={filterStyles}
					text={'Brand'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					effects={effects}
					filterStyles={filterStyles}
					text={'Effect Type'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					effects={effects}
					filterStyles={filterStyles}
					text={'Analog/Digital'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					effects={effects}
					filterStyles={filterStyles}
					text={'Power Requirements'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					effects={effects}
					filterStyles={filterStyles}
					text={'Rating'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					effects={effects}
					filterStyles={filterStyles}
					text={'Pricing'}
					query={query}
					setQuery={setQuery}
				/> */}
			</div>
		</div>
	)
}

export default FilterMenu
