// import createStore from './createReduxStore'
// import {createStore} from 'redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import countRuducer from './count_reducer'

import thunk from 'redux-thunk'

export default createStore(countRuducer,applyMiddleware(thunk))