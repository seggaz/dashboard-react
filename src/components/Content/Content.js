import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import Users from '../Users/Users';
import UsersList from '../UsersList/UsersList';
import styles from './Content.module.scss';

const Content = ({currentPage, handlePageChange}) => {

	const [searchItem, setSearchItem] = useState("");
	
	
	return (
		<div className={styles.wrapper}>
			<Search
				searchItem={searchItem}
				setSearchItem={setSearchItem}  />
			<UsersList />
			<Users />
			<Pagination 
				currentPage={currentPage} 
				onChangePage={handlePageChange} />
		</div>
	);
};

export default Content;