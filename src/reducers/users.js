import INITIAL_STATE from '../store/initialState'
import { searchByAll, searchByName, searchByUsername } from '../utils/constants'

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST': {
      return {
        ...state,
        loading: true,
      }
    }

    case 'FETCH_USERS_SUCCESS': {
      const { users } = action.payload

      return {
        ...state,
        users,
        usersBackup: users,
        loading: false,
      }
    }

    case 'SET_FILTER_USERS': {
      const { selectedFilter } = action.payload

      return {
        ...state,
        selectedFilter,
      }
    }

    case 'SET_FILTERS_QUERY': {
      const { name, value } = action.payload

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        },
      }
    }

    case 'SET_USERS_BY_FILTER': {
      const { query } = action.payload
      console.log(' SET_USERS_BY_FILTER state.usersBackup',state.usersBackup, query)
      console.log(' SET_USERS_BY_FILTER state.selectedFilter', state.selectedFilter)
      const newList = state.usersBackup.filter(user => {
        if(state.selectedFilter === searchByAll) return true
        if( (state.selectedFilter === searchByName) && (user.name.includes(query)) ) return true
        if( (state.selectedFilter === searchByUsername) && (user.username.includes(query)) ) return true

        return false
      })

      console.log('newList', newList)

      return {
        ...state,
        users: newList,
      }
    }

    case 'FETCH_USER_ME_SUCCESS': {
      const { userMe } = action.payload
      // console.log('reducers', userMe)
      return {
        ...state,
        userMe,
      }
    }

    case 'FETCH_USERS_FAILURE': {
      const { error } = action.payload

      return {
        ...state,
        error,
        loading: false,
      }
    }

    case 'FETCH_CREATE_USER': {
      const { user } = action.payload

      return {
        ...state,
        users: [
          ...state.users,
          user
        ],
        usersBackup: [
          ...state.usersBackup,
          user
        ],
        loading: false,
      }
    }

    case 'FETCH_UPDATE_USER': {
      const { user } = action.payload

      return {
        ...state,
        users: state.users.map(item => {
          if (user.id === item._id) {
            return user
          }else {
            return item
          }
        }),
        usersBackup: state.usersBackup.map(item => {
          if (user.id === item._id) {
            return user
          }else {
            return item
          }
        }),
        loading: false,
      }
    }

    case 'FETCH_DELETE_USER': {
      const { _id } = action.payload

      return {
        ...state,
        users: state.users.filter(user => _id !== user.id ),
        usersBackup: state.usersBackup.filter(user => _id !== user.id ),
        loading: false,
      }
    }

    case 'SET_USER_FORM_CHANGE': {
      const { name, value } = action.payload

      return {
        ...state,
        userForm: {
          ...state.userForm,
          [name]: value
        },
      }
    }

    case 'SET_CLASS_ERROR': {
      const { classes } = action.payload

      return {
        ...state,
        classError: classes,
      }
    }

    default: {
      return state
    }
  }
}

export default usersReducer
