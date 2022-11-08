import styles from './SideMenu.module.scss';
import logo from '../../assets/img/dashboard.png';
import ListMenu from '../LiistMenu/ListMenu';

const SideMenu = () => {
  return (
	<div className={styles.sideMenu}>
		<div className={styles.logo}>
			<img src={logo} alt="logo" />
			<span className={styles.logoVr}>v.01</span>
		</div>
		<ListMenu />
	</div>
  )
}

export default SideMenu