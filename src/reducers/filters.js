import INITIAL_STATE from '../store/initialState'

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

    default: {
      return state
    }
  }
}

export default filtersReducer
