import { combineReducers } from 'redux'
import todos from './todos'
import { single, double, counter } from './counter'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  //counters: combineReducers({single, double}),
  counter,
  visibilityFilter
})

export default todoApp