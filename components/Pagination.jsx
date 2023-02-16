import paginationStyles from '@/styles/Pagination.module.css'

const Pagination = ({ guitPerPage, totalGuitars, paginate }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalGuitars / guitPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<nav>
			<div className={paginationStyles.pagination}>
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
			</div>
		</nav>
	)
}

export default Pagination
