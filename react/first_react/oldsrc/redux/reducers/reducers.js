import countRuducer from './count_reducer'
import personReducer from './person'
import { combineReducers } from 'redux'
const allReducer = combineReducers({
    sum: countRuducer,
    people: personReducer
})

export default allReducer