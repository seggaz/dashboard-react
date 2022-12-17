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
      setLoading(true);
      const res = await axios.get('https://dummyjson.com/users');
      setUsers(res.data.users);
      setLoading(false);
    };
    getUsers();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex);

//   const filterUsers = () => {
// 	 (currentUser.filter((user) => {
// 		return searchText.toLowerCase() === ""
// 		? user
// 		: user.firstName.toLowerCase().includes(searchText)
// 	}))
//   };

//   const handleSearch = () => {
// 	setUsers(filterUsers)
//   }

  const removeUsers = (clearUser) => {
    const newTasks = [...users];
    newTasks.splice(clearUser, 1);
    setUsers(newTasks);
  };

  return (
    <div style={{ height: '100%' }}>
      <Search 
	  	searchText={searchText}
		setSearchText={setSearchText}
	/>
      <Users
	  	searchText={searchText}
        users={currentUser}
        removeUsers={removeUsers}
        loading={loading}
      />

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      {currentUser.length === 0 ? (
        <div className={styles.notFound}>Users not found!</div>
      ) : (
        <div className={styles.buttons}>
          <button className={styles.prevPage} onClick={prevPage}>
            &laquo;
          </button>
          <button className={styles.nextPage} onClick={nextPage}>
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Customers;
