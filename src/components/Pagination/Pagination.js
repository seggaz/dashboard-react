import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const PAGE_RANGE_DISPLAYED = 4;
const PAGE_COUNT = 4;

const Pagination = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (e) => {
		setCurrentPage(e.selected + 1);
	};

	return (
		<ReactPaginate
		  className={styles.root}
		  breakLabel="..."
		  nextLabel=">"
		  previousLabel="<"
		  onPageChange={handlePageChange}
		  pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
		  pageCount={PAGE_COUNT}
		  forcePage={currentPage - 1}
		/>
  );
};

export default Pagination;