import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { filterTickets } from '../../assets/js/Filters';
import { formatTickets } from '../../assets/js/ticketFormat';
import '../Tabs/TicketTabs.scss';

import s from './Menu.module.scss';


const { TabPane } = Tabs;

export function Menu() {
	const [cheapCounter, setCheapCounter] = useState(5);
	const [fastCounter, setFastCounter] = useState(5);
	const data = useSelector((state) => state.data);
	const { checkAll, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = useSelector((state) => state.check);

	useEffect(() => {}, [checkAll, withoutTransfer, oneTransfer, twoTransfers, threeTransfers]);

	if (data) {
		return (
			<div className={s.menu}>
				<div className="tabs">
					<Tabs defaultActiveKey="1" centered>
						<TabPane tab="Самый дешевый" key="1">
							<div className={s.menu__wrapper}>{formatTickets(filterTickets(), cheapCounter, true)}</div>
							<div className={s.btn} onClick={() => setCheapCounter(cheapCounter + 5)}>
								Показать еще 5 билетов!
							</div>
						</TabPane>
						<TabPane tab="Самый быстрый" key="2">
							<div className={s.menu__wrapper}>{formatTickets(filterTickets(), fastCounter, false, true)}</div>
							<div className={s.btn} onClick={() => setFastCounter(fastCounter + 5)}>
								Показать еще 5 билетов!
							</div>
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}