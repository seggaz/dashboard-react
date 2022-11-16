import React, { useEffect, useState } from 'react';
import styles from './Users.module.scss';
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
				const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=8&_page=${currentPage}`);
				setUsers(data)
			} catch (error) {
				alert('Error getting user!');
			}
		}
		
		fetchUsers();
	}, []);
		
		if (!users) {
			return <>'Загрузка...'</>;
		}
	return (
		<div className={styles.allUsers}>
			<ul> 
				{
					users.map(user => (
						<li
							key={user.id}git 
						>
							<span>{user.name}</span> 
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