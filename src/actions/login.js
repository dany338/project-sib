export const fetchLoginRequest = () => {
  // console.log('4) se ejecuta fetchLoginRequest en actionCreator')
  return {
    type: 'FETCH_LOGIN_REQUEST',
  }
}

export const fetchLoginSuccess = login => {
  // console.log('9) se ejecuta fetchLoginSuccess en actionCreator')

  return {
    type: 'FETCH_LOGIN_SUCCESS',
    payload: { login },
  }
}

export const fetchLoginFailure = errorLogin => {
  return {
    type: 'FETCH_LOGIN_FAILURE',
    payload: { errorLogin },
  }
}

export const fetchLogoutSuccess = login => {
  return {
    type: 'FETCH_LOGOUT_SUCCESS',
    payload: { login },
  }
}

export const setLoginFormChange = (name, value) => {
  // console.log('9) se ejecuta setLoginFormChange en actionCreator')

  return {
    type: 'SET_LOGIN_FORM_CHANGE',
    payload: { name, value },
  }
}
