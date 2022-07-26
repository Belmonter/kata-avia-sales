import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { filterTickets } from '../../assets/js/Filters';
import * as allActions from '../../redux/actions';

import s from './Filters.module.scss';

function Filters() {
	const state = useSelector((state) => state.check);
	const data = useSelector((state) => state.data);
	const dispatch = useDispatch();
	const { checkAll, noTransfer, oneTransfer, twoTransfers, threeTransfers } = bindActionCreators(allActions, dispatch);

	return (
		<div className={s.filters}>
			<div className={s.title}>Количество пересадок</div>
			<div className={s.wrapper}>
				<div className="checkbox">
					<input
						id="c_1"
						data-error="Ошибка"
						className="checkbox__input"
						type="checkbox"
						value="1"
						name="form[]"
						checked={state.checkAll}
						onChange={(e) => {
							checkAll(e);
							filterTickets(data);
						}}
					/>
					<label htmlFor="c_1" className="checkbox__label">
						<span className="checkbox__text">Все</span>
					</label>
				</div>
				<div className="checkbox">
					<input
						id="c_2"
						data-error="Ошибка"
						className="checkbox__input"
						type="checkbox"
						value="1"
						name="form[]"
						checked={state.withoutTransfer}
						onChange={(e) => {
							noTransfer(e);
							filterTickets(data);
						}}
					/>
					<label htmlFor="c_2" className="checkbox__label">
						<span className="checkbox__text">Без пересадок</span>
					</label>
				</div>
				<div className="checkbox">
					<input
						id="c_3"
						data-error="Ошибка"
						className="checkbox__input"
						type="checkbox"
						value="1"
						name="form[]"
						checked={state.oneTransfer}
						onChange={(e) => {
							oneTransfer(e);
							filterTickets(data);
						}}
					/>
					<label htmlFor="c_3" className="checkbox__label">
						<span className="checkbox__text">1 пересадка</span>
					</label>
				</div>
				<div className="checkbox">
					<input
						id="c_4"
						data-error="Ошибка"
						className="checkbox__input"
						type="checkbox"
						value="1"
						name="form[]"
						checked={state.twoTransfers}
						onChange={(e) => {
							twoTransfers(e);
							filterTickets(data);
						}}
					/>
					<label htmlFor="c_4" className="checkbox__label">
						<span className="checkbox__text">2 пересадки</span>
					</label>
				</div>
				<div className="checkbox">
					<input
						id="c_5"
						data-error="Ошибка"
						className="checkbox__input"
						type="checkbox"
						value="1"
						name="form[]"
						checked={state.threeTransfers}
						onChange={(e) => {
							threeTransfers(e);
							filterTickets(data);
						}}
					/>
					<label htmlFor="c_5" className="checkbox__label">
						<span className="checkbox__text">3 пересадки</span>
					</label>
				</div>
			</div>
		</div>
	);
}

// const mapStateToProps = (state) => {
// 	return { checkboxes: state };
// };
//
// export default connect(mapStateToProps, action)(Filters);
export default Filters;
