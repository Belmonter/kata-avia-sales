import { store } from '../../redux';

export function filterTickets() {
	let resultData;
	const { data } = store.getState();
	const { checkAll, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = store.getState().check;
	if (checkAll || (!checkAll && !withoutTransfer && !oneTransfer && !twoTransfers && !threeTransfers)) {
		return data;
	}
	if (withoutTransfer && !oneTransfer && !twoTransfers && !threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0);
		return resultData;
	}
	if (withoutTransfer && oneTransfer && !twoTransfers && !threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length <= 1);
		return resultData;
	}
	if (withoutTransfer && !oneTransfer && twoTransfers && !threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 0 || el.segments[0].stops.length === 2);
		return resultData;
	}
	if (withoutTransfer && !oneTransfer && !twoTransfers && threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 0 || el.segments[0].stops.length === 3);
		return resultData;
	}
	if (withoutTransfer && oneTransfer && twoTransfers && !threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length <= 2);
		return resultData;
	}
	if (withoutTransfer && oneTransfer && !twoTransfers && threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length <= 1 || el.segments[0].stops.length === 3);
		return resultData;
	}
	if (withoutTransfer && !oneTransfer && twoTransfers && threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 0 || el.segments[0].stops.length >= 2);
		return resultData;
	}

	if (!withoutTransfer && oneTransfer && !twoTransfers && !threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 1);
		return resultData;
	}
	if (!withoutTransfer && oneTransfer && twoTransfers && !threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 1 || el.segments[0].stops.length === 2);
		return resultData;
	}
	if (!withoutTransfer && oneTransfer && !twoTransfers && threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 1 || el.segments[0].stops.length === 3);
		return resultData;
	}
	if (!withoutTransfer && oneTransfer && twoTransfers && threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length >= 1);
		return resultData;
	}

	if (!withoutTransfer && !oneTransfer && twoTransfers && !threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 2);
		return resultData;
	}
	if (!withoutTransfer && !oneTransfer && twoTransfers && threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length >= 2);
		return resultData;
	}

	if (!withoutTransfer && !oneTransfer && !twoTransfers && threeTransfers) {
		resultData = data.filter((el) => el.segments[0].stops.length === 3);
		return resultData;
	}
}
