import * as SibActions from '../actions'
// Apis, constants
import api from '../utils/api'

// **** dispatch's for users ****
export const getUsersRequest = () => {
  return async (dispatch) => {
    try {
      // console.log('3) se dispara fetchUsersRequest')
      dispatch(SibActions.fetchUsersRequest())
      // console.log('7) se dispara el fetch a la API')
      const users = await api.getUsers()
      // console.log('8) se dispara fetchUsersSuccess')
      dispatch(SibActions.fetchUsersSuccess(users))
    } catch (error) {
      dispatch(SibActions.fetchUsersFailure(error.message))
    }
  }
}

export const getUsersByFilter = (query) => {
  return (dispatch) => {
    dispatch(SibActions.fetchUsersByFilter(query))
  }
}

export const getUserMeRequest = (login) => {
  return async (dispatch) => {
    try {
      // console.log('7) se dispara el fetch a la API ----> getUserMe')
      const userMe = await api.getUserMe(login)
      // console.log('8) se dispara fetchUserMeSuccess Me --->', userMe)
      dispatch(SibActions.fetchUserMeSuccess(userMe))
    } catch (error) {
      dispatch(SibActions.fetchUsersFailure(error.message))
    }
  }
}

export const createUserRequest = (user) => {
  return async (dispatch) => {
    try {
      // console.log('7) se dispara el fetch a la API')
      const userInfo = await api.createUser(user)
      // console.log('8) se dispara fetchCreateUser')
      dispatch(SibActions.fetchCreateUser(userInfo))
    } catch (error) {
      dispatch(SibActions.fetchUsersFailure(error.message))
    }
  }
}

export const updateUserRequest = (user) => {
  return async (dispatch) => {
    try {
      // console.log('7) se dispara el fetch a la API')
      const userInfo = await api.updateUser(user)
      // console.log('8) se dispara fetchUpdateUser')
      dispatch(SibActions.fetchUpdateUser(userInfo))
    } catch (error) {
      dispatch(SibActions.fetchUsersFailure(error.message))
    }
  }
}

export const deleteUserRequest = (user) => {
  return async (dispatch) => {
    try {
      // console.log('7) se dispara el fetch a la API')
      const { _id } = user
      const userInfo = await api.deleteUser(_id)
      // console.log('8) se dispara fetchDeleteUser')
      dispatch(SibActions.fetchDeleteUser(_id))
    } catch (error) {
      dispatch(SibActions.fetchUsersFailure(error.message))
    }
  }
}

export const userFormChangeRequest = (name, value) => {
  return (dispatch) => {
    try {
      // console.log('8) se dispara setUserFormChange')
      dispatch(SibActions.setUserFormChange(name, value))
    } catch (error) {
      dispatch(SibActions.fetchUsersFailure(error.message))
    }
  }
}

export const setClassErrorRequest = (classes) => {
  return (dispatch) => {
    dispatch(SibActions.setClassError(classes))
  }
}

// **** dispatch's for login ****
export const loginRequest = (login) => {
  return async (dispatch) => {
    try {
      // console.log('3) se dispara fetchLoginRequest')
      dispatch(SibActions.fetchLoginRequest())
      // console.log('7) se dispara el fetch a la API')
      const auth = await api.login(login)
      console.log('auth', auth)
      if( auth.message !== undefined ) {
        dispatch(SibActions.fetchLoginFailure(auth.message))
      } else {
        if( auth.token !== undefined ) {
          login = { ...login, token: auth.token }
        }
        // console.log('8) se dispara fetchLoginSuccess', login)
        dispatch(SibActions.fetchLoginSuccess(login))
      }
    } catch (error) {
      dispatch(SibActions.fetchLoginFailure(error.message))
    }
  }
}

export const logoutRequest = (login) => {
  return async (dispatch) => {
    try {
      // console.log('7) se dispara el fetch a la API')
      const auth = await api.logout(login)
      if( Number(auth) === 1 ) {
        // console.log('entro')
        for (const name in login) {
          // console.log('entro name', name)
          login = { ...login, [name]: '' }
        }
      }
      // console.log('8) se dispara fetchUsersSuccess', login)
      dispatch(SibActions.fetchLogoutSuccess(login))
    } catch (error) {
      dispatch(SibActions.fetchLoginFailure(error.message))
    }
  }
}

export const loginFormChangeRequest = (name, value) => {
  return (dispatch) => {
    try {
      // console.log('8) se dispara setLoginFormChange', name, value)
      dispatch(SibActions.setLoginFormChange(name, value))
    } catch (error) {
      dispatch(SibActions.fetchLoginFailure(error.message))
    }
  }
}

// **** dispatch's for filters ****
export const setFilterUsersRequest = (selectedFilter) => {
  return (dispatch) => {
    dispatch(SibActions.setFilterUsers(selectedFilter))
  }
}

export const setFiltersQueryRequest = (name, value) => {
  return (dispatch) => {
    dispatch(SibActions.setFiltersQuery(name, value))
  }
}
