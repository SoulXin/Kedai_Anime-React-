import {SEARCH_ANIME,CURRENT_DATA,CURRENT_PAGE,TOTAL_PAGES} from './Type'

const initialState = {
    allData : [],
    currentData : [],
    currentPage : null,
    totalPages : null,
}

const searchReducer = (state = initialState,action) => {
    switch(action.type){
        case SEARCH_ANIME : return {
            ...state,
            allData : action.data
        }
        case CURRENT_DATA : return {
            ...state,
            currentData : action.data
        }
        case CURRENT_PAGE : return {
            ...state,
            currentPage : action.data
        }
        case TOTAL_PAGES : return {
            ...state,
            totalPages : action.data
        }
        default : return state
    }
}

export default searchReducer