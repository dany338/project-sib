const INITIAL_STATE = {
  users: [],
  usersBackup: [],
  isLogged: false,
  login: {
    username: '',
    password: '',
    token: ''
  },
  userMe: null,
  userForm: {
    _id: null,
    username: '',
    password: '',
    email: '',
    name: '',
    lastname: '',
    ubicacion: '',
    perfil: ''
  },
  loading: false,
  error: null,
  errorLogin: null,
  classError: '',
  selectedFilter: 'All',
  filters: {
    query: ''
  }
}

export default INITIAL_STATE
