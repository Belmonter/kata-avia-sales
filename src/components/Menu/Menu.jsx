import { Tabs } from 'antd';
import { useSelector } from 'react-redux';

import { formatTickets } from '../../assets/js/ticketFormat';
import '../Tabs/TicketTabs.scss';

import s from './Menu.module.scss';


const { TabPane } = Tabs;

export function Menu() {
	const data = useSelector((state) => state.data);
	if (data && data.tickets) {
		return (
			<div className={s.menu}>
				<div className="tabs">
					<Tabs defaultActiveKey="1">
						<TabPane tab="Самый дешевый" key="1">
							<div className={s.menu__wrapper}>{formatTickets(data, true)}</div>
							<div className={s.btn}>Показать еще 5 билетов!</div>
						</TabPane>
						<TabPane tab="Самый быстрый" key="2">
							<div className={s.menu__wrapper}>{formatTickets(data, false, true)}</div>
							<div className={s.btn}>Показать еще 5 билетов!</div>
						</TabPane>
						<TabPane tab="Оптимальный" key="3">
							<div className={s.menu__wrapper}>{formatTickets(data, true)}</div>
							<div className={s.btn}>Показать еще 5 билетов!</div>
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}