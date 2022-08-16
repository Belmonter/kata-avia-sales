import 'antd/dist/antd.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import s from './App.module.scss';
import logo from './assets/img/Logo.svg';
import AviaService from './assets/js/apiService';
import Filters from './components/Filters/Filters';
import { Menu } from './components/Menu/Menu';
import * as allActions from './redux/actions';
import './scss/style.scss';

function App() {
	const api = new AviaService();
	const dispatch = useDispatch();

	const { getData } = bindActionCreators(allActions, dispatch);

	useEffect(() => {
		api.getTickets().then((data) => getData(data));
	}, []);

	return (
		<div className={s.app}>
			<div className="app__container">
				<img className={s.logo} src={logo} alt="logo icon" />
				<div className={s.app__wrapper}>
					<Filters />
					<Menu />
				</div>
			</div>
		</div>
	);
}

export default App;