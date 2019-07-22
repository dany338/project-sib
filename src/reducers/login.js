import INITIAL_STATE from '../store/initialState'

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LOGIN_REQUEST': {
      return {
        ...state,
        isLogged: false,
        loading: true,
      }
    }

    case 'FETCH_LOGIN_SUCCESS': {
      const { login } = action.payload

      return {
        ...state,
        login,
        isLogged: true,
        loading: false,
      }
    }

    case 'FETCH_LOGIN_FAILURE': {
      const { errorLogin } = action.payload

      return {
        ...state,
        errorLogin,
        isLogged: false,
        loading: false,
      }
    }

    case 'FETCH_LOGOUT_SUCCESS': {
      const { login } = action.payload

      return {
        ...state,
        login,
        isLogged: false,
      }
    }

    case 'SET_LOGIN_FORM_CHANGE': {
      const { name, value } = action.payload

      return {
        ...state,
        login: {
          ...state.login,
          [name]: value
        },
      }
    }

    default: {
      return state
    }
  }
}

export default loginReducer
