import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE} from './actionTypes'

import { searchRepo } from '../../api/'

export const searchAction = (search) => async dispatch => {
    dispatch({type: SEARCH_START})

    try {
        const serchRes = await searchRepo(search)
        dispatch({type: SEARCH_SUCCESS, payload: serchRes})
    } catch (err) {
        dispatch({type: SEARCH_FAILURE, payload: err, error: true})
    }
}
