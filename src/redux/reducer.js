const initialState = {
	checkAll: false,
	withoutTransfer: false,
	oneTransfer: false,
	twoTransfers: false,
	threeTransfers: false,
};

const reducer = (state = initialState, action) => {
	const { checkAll, withoutTransfer, oneTransfer, twoTransfers, threeTransfers } = state;
	switch (action.type) {
		case 'CHECK_ALL':
			return {
				checkAll: action.payload,
				withoutTransfer: action.payload,
				oneTransfer: action.payload,
				twoTransfers: action.payload,
				threeTransfers: action.payload,
			};

		case 'NO_TRANSFER':
			if (!checkAll && oneTransfer && twoTransfers && threeTransfers && action.payload) {
				return {
					checkAll: true,
					withoutTransfer: true,
					oneTransfer: true,
					twoTransfers: true,
					threeTransfers: true,
				};
			} else if ((checkAll && !oneTransfer) || !twoTransfers || !threeTransfers || !action.payload) {
				return { ...state, checkAll: false, withoutTransfer: action.payload };
			} else return { ...state, withoutTransfer: action.payload };

		case 'ONE_TRANSFER':
			if (!checkAll && withoutTransfer && twoTransfers && threeTransfers && action.payload) {
				return {
					checkAll: true,
					withoutTransfer: true,
					oneTransfer: true,
					twoTransfers: true,
					threeTransfers: true,
				};
			} else if ((checkAll && !withoutTransfer) || !twoTransfers || !threeTransfers || !action.payload) {
				return { ...state, checkAll: false, oneTransfer: action.payload };
			} else {
				return { ...state, oneTransfer: action.payload };
			}

		case 'TWO_TRANSFERS':
			if (!checkAll && withoutTransfer && oneTransfer && threeTransfers && action.payload) {
				return {
					checkAll: true,
					withoutTransfer: true,
					oneTransfer: true,
					twoTransfers: true,
					threeTransfers: true,
				};
			} else if ((checkAll && !withoutTransfer) || !oneTransfer || !threeTransfers || !action.payload) {
				return { ...state, checkAll: false, twoTransfers: action.payload };
			} else {
				return { ...state, twoTransfers: action.payload };
			}

		case 'THREE_TRANSFERS':
			if (!checkAll && withoutTransfer && oneTransfer && twoTransfers && action.payload) {
				return {
					checkAll: true,
					withoutTransfer: true,
					oneTransfer: true,
					twoTransfers: true,
					threeTransfers: true,
				};
			} else if ((checkAll && !withoutTransfer) || !oneTransfer || !twoTransfers || !action.payload) {
				return { ...state, checkAll: false, threeTransfers: action.payload };
			} else {
				return { ...state, threeTransfers: action.payload };
			}

		default:
			return state;
	}
};

export default reducer;
