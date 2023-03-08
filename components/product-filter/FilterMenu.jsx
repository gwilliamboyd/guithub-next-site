import FilterItem from '@/components/product-filter/FilterItem'
// Styles
import filterStyles from '../../styles/Filter.module.css'

const FilterMenu = ({ query, setQuery }) => {
	return (
		<div className={filterStyles.filterContainer}>
			<div className={filterStyles.filterMaster}>
				<FilterItem
					filterStyles={filterStyles}
					text={'Brand'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Effect Type'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Analog/Digital'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Power Requirements'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Rating'}
					query={query}
					setQuery={setQuery}
				/>
				<FilterItem
					filterStyles={filterStyles}
					text={'Pricing'}
					query={query}
					setQuery={setQuery}
				/>
			</div>
		</div>
	)
}

export default FilterMenu
