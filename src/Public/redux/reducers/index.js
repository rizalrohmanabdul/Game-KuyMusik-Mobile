import {combineReducers} from 'redux';
import users from './users'
import point from './point'
import pattern from './pattern'
import sound from './sound'


const appReducer = combineReducers({
    users,
    point,
pattern,
    sound
});

export default appReducer;
