import { Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu/SideMenu';
import Customers from './pages/Customers';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import Income from './pages/Income';
import Product from './pages/Product';
import Promote from './pages/Promote';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
		<div className={styles.wrapper}>
		<SideMenu />
			<div className={styles.mainBoard}>
				<Routes>
					<Route path="/customers" element={<Customers />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/product" element={<Product />} />
					<Route path="/income" element={<Income />} />
					<Route path="/promote" element={<Promote />} />
					<Route path="/help" element={<Help />} />
				</Routes>
			</div>
		</div>
    </div>
  );
}

export default App;
