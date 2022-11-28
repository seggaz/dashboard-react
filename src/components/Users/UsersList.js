import React from 'react';
import styles from './UsersList.module.scss';


const Users = ({users}) => {
	if (!users) { 
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
					users.map(user => (
						<li
							key={user.id}
						>
							<span>{user.firstName}</span>
							<span>{user.company.name}</span>
							<span>{user.phone}</span>
							<span>{user.email}</span>
							<span>{user.address.city}</span>
							<button 
								className={styles.btnInactive} 
								>
								Active
							</button>
						</li>
					))
				}
				
			</ul>
		</div>
	);
};

export default Users;