import {combineReducers} from 'redux'
import searchReducer from './Search/Reducer'

const rootReducer = combineReducers({
    search : searchReducer
})

export default rootReducer