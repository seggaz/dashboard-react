import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import Users from '../components/Users/UsersList';
import styles from './Customers.module.scss';

const Customers = () => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  useEffect(() => {
	const getUsers = async () => {
		setLoading(true)
		const res = await axios.get('https://dummyjson.com/users/')
		setUsers(res.data.users)
		setLoading(false)
	}
	getUsers()
  }, [])

  const lastUserIndex = currentPage * usersPerPage
  const firstUserIndex = lastUserIndex - usersPerPage
  const currentUser = users.slice(firstUserIndex, lastUserIndex)


  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  const handleSearch = (value) => {
    const searchValue = users.filter((user) => (user.firstName.length <= 3 ? value : ''));
    setSearchText(searchValue);
    console.log(value);
  };


  return (
    <div>
      <Search 
	    searchItem={searchText} 
		setSearchItem={setSearchText} 
		handleSearch={handleSearch}
		/>

      <Users 
	  	users={currentUser} l
		loading={loading}
	   />

      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
      <div className={styles.buttons}>
        <button className={styles.prevPage} onClick={prevPage}>
          &laquo;
        </button>
        <button className={styles.nextPage} onClick={nextPage}>
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Customers;
