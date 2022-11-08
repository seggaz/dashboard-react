import React from 'react';
import styles from './UsersList.module.scss';

const UsersList = () => {
	return (
		<div className={styles.userList}>
			<ul>
				<li>Customer Name</li>
				<li>Company</li>
				<li>Phone Number</li>
				<li>Email</li>
				<li>Country</li>
				<li>Status</li>
			</ul>
		</div>
	);
};

export default UsersList;