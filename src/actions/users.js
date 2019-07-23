export const fetchUsersRequest = () => {
  // console.log('4) se ejecuta fetchUsersRequest en actionCreator')
  return {
    type: 'FETCH_USERS_REQUEST',
  }
}

export const fetchUsersSuccess = users => {
  // console.log('9) se ejecuta fetchUsersSuccess en actionCreator')

  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: { users },
  }
}

export const fetchUsersByFilter = query => {
  return {
    type: 'SET_USERS_BY_FILTER',
    payload: { query },
  }
}

export const fetchUserMeSuccess = userMe => {
  console.log('9) se ejecuta fetchUserMeSuccess en actionCreator', userMe)

  return {
    type: 'FETCH_USER_ME_SUCCESS',
    payload: { userMe },
  }
}

export const fetchUsersFailure = error => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: { error },
  }
}

export const fetchCreateUser = user => {
  // console.log('9) se ejecuta fetchCreateUser en actionCreator')

  return {
    type: 'FETCH_CREATE_USER',
    payload: { user },
  }
}

export const fetchUpdateUser = user => {
  // console.log('9) se ejecuta fetchUpdateUser en actionCreator')

  return {
    type: 'FETCH_UPDATE_USER',
    payload: { user },
  }
}

export const fetchDeleteUser = _id => {
  // console.log('9) se ejecuta fetchDeleteUser en actionCreator')

  return {
    type: 'FETCH_DELETE_USER',
    payload: { _id },
  }
}

export const setUserFormChange = (name, value) => {
  // console.log('9) se ejecuta userFormChange en actionCreator')

  return {
    type: 'SET_USER_FORM_CHANGE',
    payload: { name, value },
  }
}

export const setClassError = classes => {
  // console.log('9) se ejecuta setClassError en actionCreator')

  return {
    type: 'SET_CLASS_ERROR',
    payload: { classes },
  }
}

export const setFilterUsers = selectedFilter => {
  // console.log('4) se ejecuta setFilterUsers en actionCreator')
  return {
    type: 'SET_FILTER_USERS',
    payload: { selectedFilter },
  }
}

export const setFiltersQuery = (name, value) => {
  // console.log('9) se ejecuta setFiltersQuery en actionCreator')
  return {
    type: 'SET_FILTERS_QUERY',
    payload: { name, value },
  }
}
