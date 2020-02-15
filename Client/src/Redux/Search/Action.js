import {SEARCH_ANIME,CURRENT_DATA,CURRENT_PAGE,TOTAL_PAGES} from './Type'

export const search_anime_action = (data) => {
    return {
        type : SEARCH_ANIME,
        data
    }
}

export const current_data_action = (data) => {
    return {
        type : CURRENT_DATA,
        data
    }
}

export const current_page_action = (data) => {
    return {
        type : CURRENT_PAGE,
        data
    }
}

export const total_pages_action = (data) => {
    return {
        type : TOTAL_PAGES,
        data
    }
}