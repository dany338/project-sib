import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allReducers from '../reducers'
// Call, dispatchers
import {
  getUsersRequest,
  getUsersByFilter,
  getUserMeRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest,
  userFormChangeRequest,
  setClassErrorRequest,
  setFilterUsersRequest,
  setFiltersQueryRequest,
  loginRequest,
  logoutRequest,
  loginFormChangeRequest
} from './dispatchers'

// Concept: Middleware,
const middlewares = applyMiddleware(thunk)
const store = createStore(
  allReducers,
  middlewares
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {
  store as default,
  getUsersRequest,
  getUsersByFilter,
  getUserMeRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest,
  userFormChangeRequest,
  setClassErrorRequest,
  setFilterUsersRequest,
  setFiltersQueryRequest,
  loginRequest,
  logoutRequest,
  loginFormChangeRequest
}
