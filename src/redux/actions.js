import { store } from './index';

export const checkAll = (e) => {
	const check = e.target.checked;
	let { check: state } = store.getState();
	state = {
		...state,
		checkAll: check,
		withoutTransfer: check,
		oneTransfer: check,
		twoTransfers: check,
		threeTransfers: check,
	};
	return { type: 'CHECK_ALL', payload: state };
};

export const noTransfer = (e) => {
	const check = e.target.checked;
	let result;
	const { check: state } = store.getState();
	const { checkAll, oneTransfer, twoTransfers, threeTransfers } = state;
	if (!checkAll && oneTransfer && twoTransfers && threeTransfers && check) {
		result = {
			checkAll: true,
			withoutTransfer: true,
			oneTransfer: true,
			twoTransfers: true,
			threeTransfers: true,
		};
		return { type: 'NO_TRANSFER', payload: result };
	} else if ((checkAll && !oneTransfer) || !twoTransfers || !threeTransfers || !check) {
		result = { ...state, checkAll: false, withoutTransfer: check };
		return { type: 'NO_TRANSFER', payload: result };
	} else {
		result = { ...state, withoutTransfer: check };
		return { type: 'NO_TRANSFER', payload: result };
	}
};

export const oneTransfer = (e) => {
	const check = e.target.checked;
	const { check: state } = store.getState();
	const { checkAll, withoutTransfer, twoTransfers, threeTransfers } = state;
	let result;
	if (!checkAll && withoutTransfer && twoTransfers && threeTransfers && check) {
		result = {
			checkAll: true,
			withoutTransfer: true,
			oneTransfer: true,
			twoTransfers: true,
			threeTransfers: true,
		};
		return { type: 'ONE_TRANSFER', payload: result };
	} else if ((checkAll && !withoutTransfer) || !twoTransfers || !threeTransfers || !check) {
		result = { ...state, checkAll: false, oneTransfer: check };
		return { type: 'ONE_TRANSFER', payload: result };
	} else {
		result = { ...state, oneTransfer: check };
		return { type: 'ONE_TRANSFER', payload: result };
	}
};

export const twoTransfers = (e) => {
	const check = e.target.checked;
	const { check: state } = store.getState();
	const { checkAll, withoutTransfer, oneTransfer, threeTransfers } = state;
	let result;
	if (!checkAll && withoutTransfer && oneTransfer && threeTransfers && check) {
		result = {
			checkAll: true,
			withoutTransfer: true,
			oneTransfer: true,
			twoTransfers: true,
			threeTransfers: true,
		};
		return { type: 'TWO_TRANSFERS', payload: result };
	} else if ((checkAll && !withoutTransfer) || !oneTransfer || !threeTransfers || !check) {
		result = { ...state, checkAll: false, twoTransfers: check };
		return { type: 'TWO_TRANSFERS', payload: result };
	} else {
		result = { ...state, twoTransfers: check };
		return { type: 'TWO_TRANSFERS', payload: result };
	}
};

export const threeTransfers = (e) => {
	const check = e.target.checked;
	const { check: state } = store.getState();
	const { checkAll, withoutTransfer, oneTransfer, twoTransfers } = state;
	let result;
	if (!checkAll && withoutTransfer && oneTransfer && twoTransfers && check) {
		result = {
			checkAll: true,
			withoutTransfer: true,
			oneTransfer: true,
			twoTransfers: true,
			threeTransfers: true,
		};
		return { type: 'THREE_TRANSFERS', payload: result };
	} else if ((checkAll && !withoutTransfer) || !oneTransfer || !twoTransfers || !check) {
		result = { ...state, checkAll: false, threeTransfers: check };
		return { type: 'THREE_TRANSFERS', payload: result };
	} else {
		result = { ...state, threeTransfers: check };
		return { type: 'THREE_TRANSFERS', payload: result };
	}
};

export const getData = (data) => {
	return { type: 'GET_DATA', payload: data };
};