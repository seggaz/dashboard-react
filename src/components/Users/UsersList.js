import React, { useEffect, useState } from 'react';
import styles from './UsersList.module.scss';
import axios from 'axios';


const Users = ({currentPage}) => {
	const [users, setUsers] = useState([]);
	const [active, setActive] = useState(false);

	const handleClick = (event) => {
		setActive(current => !current)
	}

	useEffect(() => {
		async function fetchUsers() {
			try {
				const {data} = await axios.get(`https://dummyjson.com/users`);
				console.log(data);
				
				setUsers(data.users)
			} catch (error) {
				alert('Error getting user!');
			}
		}
		
		fetchUsers();
	}, []);
		
		if (!users) { 
			return <>'Загрузка...'</>;
		}
		console.log(users)
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
								className={active ? styles.btnActive : styles.btnInactive} 
								onClick={handleClick}
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