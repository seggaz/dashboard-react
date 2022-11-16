import styles from './SideMenu.module.scss';
import logo from '../../assets/img/dashboard.png';
import NavMenu from '../NavMenu/NavMenu';

const SideMenu = () => {
  return (
	<div className={styles.sideMenu}>
		<div className={styles.logo}>
			<img src={logo} alt="logo" />
			<span className={styles.logoVr}>v.01</span>
		</div>
		<NavMenu />
	</div>
  )
}

export default SideMenu