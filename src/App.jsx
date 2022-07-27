import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';

import s from './App.module.scss';
import logo from './assets/img/Logo.svg';
import Filters from './components/Filters/Filters';
import { Menu } from './components/Menu/Menu';
import { store } from './redux';
import './scss/style.scss';

function App() {
	return (
		<Provider store={store}>
			<div className={s.app}>
				<div className="app__container">
					<img className={s.logo} src={logo} alt="logo icon" />
					<div className={s.app__wrapper}>
						<Filters />
						<Menu />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
