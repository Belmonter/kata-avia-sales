const initialState = {
	checkAll: false,
	withoutTransfer: false,
	oneTransfer: false,
	twoTransfers: false,
	threeTransfers: false,
};

const checkReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHECK_ALL':
			return { ...action.payload };

		case 'NO_TRANSFER':
			return { ...action.payload };

		case 'ONE_TRANSFER':
			return { ...action.payload };

		case 'TWO_TRANSFERS':
			return { ...action.payload };

		case 'THREE_TRANSFERS':
			return { ...action.payload };

		default:
			return state;
	}
};

export default checkReducer;
