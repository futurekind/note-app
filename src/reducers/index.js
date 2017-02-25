import { combineReducers } from 'redux';
import categories from '../reducers/categories';
import notes from '../reducers/notes';

export default combineReducers({
    categories,
    notes
})