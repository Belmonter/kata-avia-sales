import { Tabs } from 'antd';

import './TicketTabs.scss';

const { TabPane } = Tabs;

function TicketTabs() {
	return (
		<div className="tabs">
			<Tabs defaultActiveKey="1">
				<TabPane tab="Самый дешевый" key="1"></TabPane>
				<TabPane tab="Самый быстрый" key="2"></TabPane>
				<TabPane tab="Оптимальный" key="3"></TabPane>
			</Tabs>
		</div>
	);
}

export default TicketTabs;
