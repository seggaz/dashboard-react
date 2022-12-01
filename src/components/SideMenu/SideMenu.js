import styles from './SideMenu.module.scss';
import logo from '../../assets/img/dashboard.png';
import NavMenu from '../NavMenu/NavMenu';

const SideMenu = () => (
	<div className={styles.sideMenu}>
		<div className={styles.logo}>
			<img src={logo} alt="Dashboard App" />
			<span className={styles.appVersion}>v.01</span>
		</div>
		<NavMenu />
	</div>
  );

export default SideMenu