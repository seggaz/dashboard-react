import styles from './App.module.scss';
import Content from './components/Content/Content';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className={styles.App}>
		<div className={styles.wrapper}>
		<SideMenu />
		<Content />
		</div>
    </div>
  );
}

export default App;
