import { useState } from 'react';
import styles from './ListMenu.module.scss';
import key from '../../assets/img/key-square.svg';
import square from '../../assets/img/3d-square 1.svg';
import user from '../../assets/img/user-square 1.svg';
import wallet from '../../assets/img/wallet-money 2.svg';
import discount from '../../assets/img/discount-shape 1.svg';
import message from '../../assets/img/message-question 1.svg';

const ListMenu = () => {
	
const [categories, setCategories] = useState([
	{
		id: 1,
		isActive: false,
		title: 'Dashboard',
		icon: key
	},
	{
		id: 2,
		isActive: false,
		title: 'Product',
		icon: square
	},
	{
		id: 3,
		isActive: false,
		title: 'Customers',
		icon: user
	},
	{
		id: 4,
		isActive: false,
		title: 'Income',
		icon: wallet
	},
	{
		id: 5,
		isActive: false,
		title: 'Promote',
		icon: discount
	},
	{
		id: 6,
		isActive: false,
		title: 'Help',
		icon: message
	},
])

const handleCheck = (id) => {
	const listItems = categories.map(item => item.id === id ? {...item, isActive: !item.isActive} : item);
	setCategories(listItems);
}
	return (
		<div className={styles.categories}>
		{
			<ul className={styles.itemList}>
				{categories.map((item, i) => 
					<li 
						key={i}
						onClick={() => handleCheck(item.id)}
						className={`${item.isActive ? styles.active : null}`}
						>
						<img
						className={`${item.isActive ? styles.imgActive : null}`}
						src={item.icon}alt="" />
						{item.title}
					</li>
				)}
				
			</ul>
		}
	  </div>
	);
};

export default ListMenu;