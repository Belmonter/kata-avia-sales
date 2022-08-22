import { Progress } from 'antd';
import 'antd/dist/antd.min.css';
import { useEffect, useState } from 'react';
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
	let resData = [];
	const api = new AviaService();
	const dispatch = useDispatch();
	const { getData } = bindActionCreators(allActions, dispatch);
	const [percent, setPercent] = useState(0);
	const [loader, setLoader] = useState(true);

	function saveData(searchId = true) {
		api.getTickets(searchId).then((res) => {
			if (res) resData = [...resData, ...res.tickets];
			if (res && res.stop) {
				setPercent(100);
				setTimeout(() => setLoader(false), 200);
				getData(resData);
			} else {
				setPercent((percent) => percent + 5);
				getData(resData);
				saveData(false);
			}
		});
	}

	useEffect(() => {
		saveData();
	}, []);

	return (
		<div className={s.app}>
			<div className="app__container">
				<img className={s.logo} src={logo} alt="logo icon" />
				<div className={s.progress__wrapper}>
					{loader && (
						<Progress
							width={80}
							type="circle"
							percent={percent}
							showInfo={true}
							trailColor={'#a0b0b9'}
							strokeColor={{
								'0%': '#108ee9',
								'100%': '#87d068',
							}}
						/>
					)}
				</div>
				<div className={s.app__wrapper}>
					<Filters />
					<Menu />
				</div>
			</div>
		</div>
	);
}

export default App;
