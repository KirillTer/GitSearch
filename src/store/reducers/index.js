import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form} from 'redux-form'

import search from './search';

export default (history) => combineReducers({
    router: connectRouter(history),
    form,
    search
})