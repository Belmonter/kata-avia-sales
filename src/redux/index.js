import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';

import rootReducer from './reducer/rootReducer';

export const store = createStore(rootReducer, composeWithDevTools());