import { formatPrice } from '../../assets/js/formatPrice';
import { getTime, getTimeBetween } from '../../assets/js/getTime';

import s from './Ticket.module.scss';

function Ticket({ price, carrier, frOrigin, frDestination, frDate, frDuration, frStops, toOrigin, toDestination, toDate, toDuration, toStops }) {
	return (
		<div className={s.ticket}>
			<div className={s.header}>
				<div className={s.price}>{formatPrice(price)} Р</div>
				<div className={s.logo}>
					<img src={`https://pics.avs.io/110/36/${carrier}.png`} alt="icon logo" />
				</div>
			</div>
			<div className={s.main}>
				<div className={s.item}>
					<div className={s.item__header}>
						<div className={s.title}>
							{frOrigin} – {frDestination}
						</div>
						<div className={s.descr}>{getTimeBetween(frDate, frDuration)}</div>
					</div>
					<div className={s.footer}>
						<div className={s.title}>
							{toOrigin} – {toDestination}
						</div>
						<div className={s.descr}>{getTimeBetween(toDate, toDuration)}</div>
					</div>
				</div>
				<div className={s.item}>
					<div className={s.item__header}>
						<div className={s.title}>В пути</div>
						<div className={s.descr}>{getTime(frDuration)}</div>
					</div>
					<div className={s.footer}>
						<div className={s.title}>В пути</div>
						<div className={s.descr}>{getTime(toDuration)}</div>
					</div>
				</div>
				<div className={s.item}>
					<div className={s.item__header}>
						<div className={s.title}>{`${frStops.length} пересадка(ок, ки)`}</div>
						<div className={s.descr}>{frStops.length ? frStops.join(', ') : 'Без пересадок'}</div>
					</div>
					<div className={s.footer}>
						<div className={s.title}>{`${toStops.length} пересадка(ок, ки)`}</div>
						<div className={s.descr}>{toStops.length ? toStops.join(', ') : 'Без пересадок'}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ticket;
