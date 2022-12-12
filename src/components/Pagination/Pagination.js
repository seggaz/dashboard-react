import styles from './Pagination.module.scss';

const Pagination = ({usersPerPage, totalUsers, paginate, currentPage}) => {
	const pageNumbers = []

	for (let i = 1; i < Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div>
			<ul className={styles.root}>
				{
					pageNumbers.map(number => (
						<li 
							className={styles.active}
							key={number}
							>
							<a href="!#"
								onClick={() => paginate(number)}
								>
									{number}
								</a>				
						</li>
					))
				}
			</ul>
		</div>
  )
};

export default Pagination;