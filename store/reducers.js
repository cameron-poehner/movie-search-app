import { combineReducers } from 'redux';

import search from './querySlice';

const reducers = combineReducers({
    search,
})

export default reducers