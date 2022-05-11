import { combineReducers } from 'redux';

import filtersReducer from './filters';
import burgersReducer from './burgers';


const rootReducer = combineReducers({
    filters: filtersReducer,
    burgers: burgersReducer,
});

export default rootReducer;