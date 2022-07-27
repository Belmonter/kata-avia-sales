import logo from '../../assets/img/S7 Logo.svg';

import s from './Ticket.module.scss';

function Ticket() {
	return (
		<div className={s.ticket}>
			<div className={s.header}>
				<div className={s.price}>13 400 Р</div>
				<div className={s.logo}>
					<img src={logo} alt="icon logo" />
				</div>
			</div>
			<div className={s.main}>
				<div className={s.item}>
					<div className={s.item__header}>
						<div className={s.title}>MOW – HKT</div>
						<div className={s.descr}>10:45 – 08:00</div>
					</div>
					<div className={s.footer}>
						<div className={s.title}>MOW – HKT</div>
						<div className={s.descr}>11:20 – 00:50</div>
					</div>
				</div>
				<div className={s.item}>
					<div className={s.item__header}>
						<div className={s.title}>В пути</div>
						<div className={s.descr}>21ч 15м</div>
					</div>
					<div className={s.footer}>
						<div className={s.title}>В пути</div>
						<div className={s.descr}>13ч 30м</div>
					</div>
				</div>
				<div className={s.item}>
					<div className={s.item__header}>
						<div className={s.title}>2 пересадки</div>
						<div className={s.descr}>HKG, JNB</div>
					</div>
					<div className={s.footer}>
						<div className={s.title}>1 пересадка</div>
						<div className={s.descr}>HKG</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ticket;
