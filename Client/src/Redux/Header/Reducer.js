import {BACKGROUND} from './Type'

const initialState = {
    background : 0
}

const headerReducer = (state = initialState,action) => {
    switch(action.type){
        case BACKGROUND : return {
            ...state,
            background : action.data
        }
        default : return state
    }
}

export default headerReducer