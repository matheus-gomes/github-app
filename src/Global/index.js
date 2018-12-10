import { createStore, combineReducers } from 'redux';
import { globalReducer } from './reducers/globalReducer';

export * from './actions'
export default createStore(combineReducers({
    globalReducer
}))