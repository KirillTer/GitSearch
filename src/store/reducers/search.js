import * as R from 'ramda'
import {SEARCH_SUCCESS} from '../actions/actionTypes'

const initialState = {
    searchResults: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SEARCH_SUCCESS:
            return R.merge(state, {
                searchResults: payload
            })
        default: return state
    }
}