import { combineReducers } from 'redux';
import results from './moviesSlice'
import search from './querySlice';

const reducers = combineReducers({
    search,
    results,
})

export default reducers