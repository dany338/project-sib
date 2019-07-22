const baseUrl   = 'http://186.155.244.60:520/'
const ApiPath   = 'api/user'
const AuthPath  = 'auth'

let apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
}

const fetchParams = (method, data = '') => {
  let body = ''
  if(apiHeaders["Content-Type"] === 'application/x-www-form-urlencoded') {
    body = data
    return {
      method: method,
      headers: apiHeaders,
      credentials: 'same-origin',
      body: data,
    }
  } else {
    body = data ? { body: JSON.stringify(data) } : {}
    return {
      method: method,
      headers: apiHeaders,
      credentials: 'same-origin',
      ...body,
    }
  }
}

const api = {
  login: async ({ username, password }) => {
    apiHeaders = { ...apiHeaders, 'Content-Type': 'application/x-www-form-urlencoded' }
    // console.log('apiHeaders', apiHeaders)

    const loginResponse = await fetch(baseUrl + AuthPath + '/local', fetchParams('POST', 'username=' + username + '&password=' + password ))
    const loginInfo = await loginResponse.json()

    return loginInfo
  },
  logout: async ({ token }) => {
    apiHeaders = { ...apiHeaders, Authorization: token, 'Content-Type': 'application/json' }
    const logoutResponse = await fetch(baseUrl + AuthPath + '/logout', fetchParams('DELETE'))
    const logoutInfo = await logoutResponse.json()

    return logoutInfo
  },
  getUserMe: async ({ token }) => {
    apiHeaders = { ...apiHeaders, Authorization: token, 'Content-Type': 'application/json'  }
    const userResponse = await fetch(baseUrl + ApiPath + '/me', fetchParams('GET'))
    const userMe = await userResponse.json()

    return userMe
  },
  createUser: async (user) => {
    const createResponse = await fetch(baseUrl + ApiPath, fetchParams('POST', { ...user }))
    const userInfo = await createResponse.json()

    return userInfo
  },
  updateUser: async (user) => { // http://186.155.244.60:520/api/user
    // Method in API REST - it does not work correctly maybe create
    return true
  },
  deleteUser: async (id) => { // /api/admin/user/{id} Remove a user by id [Role admin]
    // Method in API REST - it does not work correctly
    return true
  },
  getUsers: async () => {
    apiHeaders = { ...apiHeaders, 'Content-Type': 'application/json' }
    const usersResponse = await fetch('users.json', fetchParams('GET'))
    const users = await usersResponse.json()

    return users
  },
}

export default api
