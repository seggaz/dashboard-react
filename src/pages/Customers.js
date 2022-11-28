import React, { useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import Users from '../components/Users/UsersList';
import {usersData} from '../usersData';

const Customers = ({currentPage, handlePageChange}) => {
	const [searchText, setSearchText] = useState("")
	const [users, setUsers] = useState(usersData);
	const count = usersData.length;

	const handleSearch = (value) => {
		const searchValue = usersData.filter(user => user.firstName.length <= 3 ? value : "")
		setSearchText(searchValue)
		console.log(value);
				
	}



	
	
	return (
		<div>
			<Search 
					searchItem={searchText}
					setSearchItem={setSearchText}
					handleSearch={handleSearch}
									
				/>
				<Users 
				users={users}
				/>
				
			
			<Pagination 
				userCount={count}
				currentPage={currentPage} 
				onChangePage={handlePageChange} />
		</div>
	);
};

export default Customers;