import { combineReducers } from 'redux';

import checkReducer from './checkReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
	check: checkReducer,
	data: dataReducer,
});

export default rootReducer;