import React from 'react';
import styles from './UsersList.module.scss';


const Users = ({users, loading, removeUsers, searchText}) => {
	if (loading) { 
			return <>'Загрузка...'</>;
		}
	return (
		<div className={styles.allUsers}>
			<div className={styles.userHead}>
				<div>Customer Name</div>
				<div>Company</div>
				<div>Phone Number</div>
				<div>Email</div>
				<div>Country</div>
				<div>Status</div>
		</div>
			<ul> 
				{
					users
					// .filter((user) => {
					// 	return searchText.toLowerCase() === ''
					// 	? user
					// 	: user.firstName.toLowerCase().includes(searchText)
					// })
					.map((user, i) => (
						<li
							key={i}
						>
							<span>{user.firstName}</span>
							<span>{user.domain}</span>
							<span>{user.phone}</span>
							<span>{user.email}</span>
							<span>{user.address.city}</span>
							<button 
								className={styles.btnInactive} 
								onClick={removeUsers}
								>
								Delete
							</button>
						</li>
					))
				}
				
			</ul>
		</div>
	);
};

export default Users;