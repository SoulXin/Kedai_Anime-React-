import {combineReducers} from 'redux'
import headerReducer from './Header/Reducer'
import searchReducer from './Search/Reducer'

const rootReducer = combineReducers({
    header : headerReducer,
    search : searchReducer
})

export default rootReducer