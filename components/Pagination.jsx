import paginationStyles from '@/styles/Pagination.module.css'

const Pagination = ({
	guitPerPage,
	totalProducts,
	paginate,
	firstIndex,
	lastIndex,
	previousPage,
	nextPage,
}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalProducts / guitPerPage); i++) {
		pageNumbers.push(i)
	}

	/* 	const nextPage = () => {
		firstIndex = lastIndex
		lastIndex = lastIndex + guitPerPage
		console.log(`First Index: ${firstIndex} Last Index: ${lastIndex}`)
		return firstIndex, lastIndex
	} */
	return (
		<nav>
			<div className={paginationStyles.pagination}>
				<button
					className={paginationStyles.previousButton}
					onClick={previousPage}>
					Prev
				</button>
				{pageNumbers.map(number => (
					<div
						key={number}
						className={paginationStyles.pageButton}>
						<button
							type='button'
							onClick={() => paginate(number)}
							href='#'
							className={paginationStyles.pageLink}>
							{number}
						</button>
					</div>
				))}
				<button
					className={paginationStyles.nextButton}
					onClick={nextPage}>
					Next
				</button>
			</div>
		</nav>
	)
}

export default Pagination
