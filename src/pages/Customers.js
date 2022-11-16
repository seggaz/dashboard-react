import React from 'react';
import Pagination from '../components/Pagination/Pagination';
import Users from '../components/Users/Users';
import UsersList from '../components/UsersList/UsersList';

const Customers = ({currentPage, handlePageChange}) => {
	return (
		<div>
			<UsersList />
			<Users />
			<Pagination 
				currentPage={currentPage} 
				onChangePage={handlePageChange} />
		</div>
	);
};

export default Customers;