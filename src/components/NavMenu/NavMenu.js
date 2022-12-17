import React from 'react';
import { NavLink } from 'react-router-dom';
import { DiscountIcon } from '../Icons/discoutnIcon';
import { KeyIcon } from '../Icons/keyIcon';
import { MessageIcon } from '../Icons/messageIcon';
import { SquareIcon } from '../Icons/squareIcon';
import { SquareUser } from '../Icons/squareUser';
import { WalletIcon } from '../Icons/walletIcom';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <div className={styles.categories}>
      <ul className={styles.itemList}>
		<li className={styles.navLink}>
		<NavLink 
			to="/dashboard" >
          <KeyIcon />
          Dashboard
        </NavLink>
		</li>
        <li className={styles.navLink}>
		<NavLink to="/product" >
         <SquareIcon />
          Product
        </NavLink>
		</li>
        <li className={styles.navLink}>
		<NavLink to="/customers">
		<SquareUser />
          Customers
        </NavLink>
		</li>
        <li className={styles.navLink}>
		<NavLink to="/income">
         <WalletIcon />
          Income
        </NavLink>
		</li>
       <li className={styles.navLink}>
	   <NavLink to="/promote">
          <DiscountIcon />
          Promote
        </NavLink>
	   </li>
       <li className={styles.navLink}>
	   <NavLink to="/help">
         <MessageIcon />
          Help
        </NavLink>
	   </li>
        
      </ul>
    </div>
  );
};

export default NavMenu;
