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
