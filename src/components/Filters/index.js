import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setFilterUsersRequest, setFiltersQueryRequest } from '../../store'
import { StyledSpan } from './styled'
import nanoid from 'nanoid'

const Filters = (props) => {
  const { isLogged, usersCount, usersBackup, filters, setFilterBy, setFilterQuery, selectedFilter } = props

  const handleSelectChange = event => {
    const { value } = event.target
    setFilterBy(value)
  }

  const handleChangeQuery = event => {
    const { name, value } = event.target
    // console.log('selectedFilter',selectedFilter)
    console.log('usuario backup', usersBackup)
    setFilterQuery(name, value)
  }

  useEffect(() => {
    console.log('selectedFilter useEffect', selectedFilter, filters)
  }, [selectedFilter, filters])

  return (
    <nav className="navbar is-transparent">
      {isLogged && (
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <StyledSpan>
                      {usersCount}{' '}{`USUARIOS`}
                    </StyledSpan>
                  </p>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">
                    <div className="select">
                      <select name="selectedFilter" value={selectedFilter} onChange={handleSelectChange}>
                        <option key={nanoid()} value="All">All</option>
                        <option key={nanoid()} value="name">Name</option>
                        <option key={nanoid()} value="username">Username</option>
                      </select>
                    </div>
                    <div className="icon is-small is-left">
                      <i className="fas fa-globe"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control has-icons-right">
                  <input
                    className="input"
                    type="text"
                    onChange={handleChangeQuery}
                    name="query"
                    placeholder="Found your users "
                  />
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      )}
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    usersBackup: state.usersReducer.usersBackup,
    usersCount: state.usersReducer.users.length,
    isLogged: state.loginReducer.isLogged,
    filters: state.usersReducer.filters,
    selectedFilter: state.usersReducer.selectedFilter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterBy: (selectedFilter) => dispatch(setFilterUsersRequest(selectedFilter)),
    setFilterQuery: (name, value) => dispatch(setFiltersQueryRequest(name, value)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)
