import loginReducer from './login'
import usersReducer from './users'
import filtersReducer from './filters'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  loginReducer: loginReducer,
  usersReducer: usersReducer,
  filtersReducer: filtersReducer
})

export default allReducers
