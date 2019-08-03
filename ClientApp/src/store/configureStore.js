import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import studiesReducer from '../reducers/studies'
import filtersReducer from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//const debug = () => {
//    debugger
//    return 1
//}

const middleware = [
    thunk //,
    //debug
]

export default () => {
    const store = createStore(
        combineReducers({
            studies: studiesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(...middleware))
    )   
    return store
}
