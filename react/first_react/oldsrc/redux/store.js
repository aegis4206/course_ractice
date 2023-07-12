// import createStore from './createReduxStore'
// import {createStore} from 'redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers/reducers'


// import countRuducer from './reducers/count_reducer'
// import personReducer from './reducers/person'

// const allReducer = combineReducers({
//     sum: countRuducer,
//     people: personReducer
// })

export default createStore(reducers, applyMiddleware(thunk))