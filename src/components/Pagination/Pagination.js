import styles from './Pagination.module.scss';

const Pagination = ({usersPerPage, totalUsers, currentPage, paginate}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
			<div className={styles.root}>
				
				{
					pageNumbers.map((number, i) => (
						<button 
							key={i}
							onClick={() => paginate(number)}
							className={number === currentPage ? styles.active : ''} 
						>
							{number}
											
						</button>
					))
				}
			</div>
  )
};

export default Pagination;