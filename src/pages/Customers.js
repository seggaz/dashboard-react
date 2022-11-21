import React from 'react';
import Pagination from '../components/Pagination/Pagination';
import Users from '../components/Users/UsersList';

const Customers = ({currentPage, handlePageChange}) => {
	return (
		<div>
			<Users />
			<Pagination 
				currentPage={currentPage} 
				onChangePage={handlePageChange} />
		</div>
	);
};

export default Customers;