import TicketTabs from '../Tabs/TicketTabs';
import Ticket from '../Ticket/Ticket';

import s from './Menu.module.scss';

export function Menu() {
	return (
		<div className={s.menu}>
			<TicketTabs />
			<div className={s.menu__wrapper}>
				<Ticket />
				<Ticket />
				<Ticket />
				<Ticket />
				<Ticket />
			</div>
			<div className={s.btn}>Показать еще 5 билетов!</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};
