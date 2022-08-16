import { useSelector } from 'react-redux';

import TicketTabs from '../Tabs/TicketTabs';
import Ticket from '../Ticket/Ticket';

import s from './Menu.module.scss';

export function Menu() {
	const data = useSelector((state) => state.data);

	if (data && data.tickets) {
		const tickets = data.tickets.map(({ price, carrier, segments }) => {
			const { origin: frOrigin, destination: frDestination, date: frDate, duration: frDuration, stops: frStops } = segments[0];
			const { origin: toOrigin, destination: toDestination, date: toDate, duration: toDuration, stops: toStops } = segments[1];
			return (
				<Ticket
					price={price}
					carrier={carrier}
					frOrigin={frOrigin}
					frDestination={frDestination}
					frDate={frDate}
					frDuration={frDuration}
					frStops={frStops}
					toOrigin={toOrigin}
					toDestination={toDestination}
					toDate={toDate}
					toDuration={toDuration}
					toStops={toStops}
				/>
			);
		});

		return (
			<div className={s.menu}>
				<TicketTabs />
				<div className={s.menu__wrapper}>{tickets}</div>
				<div className={s.btn}>Показать еще 5 билетов!</div>
			</div>
		);
	}
}