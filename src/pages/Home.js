import React, { Component } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import CardHome from '../components/CardHome'
import { getUsersRequest, getUsersByFilter } from '../store'

class Home extends Component {
  state = {
    classError: '',
    usersHome: []
  }

  componentDidMount() {
    const { getUsersItems } = this.props
    // console.log('1) componentDidMount dispara getUsersItems ')
    getUsersItems()
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLogged, history, usersItems, usersBackup, usersItemsCount, usersBackupCount, getUsersFiltered, filters, selectedFilter } = this.props
    const { query } = filters
    if(!isLogged) {
      history.push('/')
    }
    console.log('prevProps',prevProps)
    console.log('prevProps usersItems',prevProps.filters)
    console.log('usersItems',usersItems, usersItemsCount)
    console.log('usersBackup',usersBackup, usersBackupCount)
    console.log('filters query',filters, filters.query)
    console.log('selectedFilter',selectedFilter)
    console.log('this.state',this.state)
    // if(prevState.error !== this.state.error) {
    //   // console.log('entro')
    // }
    if(prevProps.filters.query !== query) {
      console.log('entro')
      getUsersFiltered(query)
    }
  }

  handleLinkClose = () => {
    this.setState({ classError: 'is-hidden' })
  }

  render() {
    const { classError } = this.state
    const { usersItems, loading, error, isLogged } = this.props
    // const products = useSelector(state => state.productsReducer.products)
    // const isLoading = useSelector(state => state.productsReducer.loading)
    // const isError = useSelector(state => state.productsReducer.error)
    // const dispatch = useDispatch()
    return (
      <div>
        <h1 className="is-size-2" style={{ background: 'hsl(204, 86%, 53%)' }}>Página de usuarios</h1>
        {error && (
          <article className={`message is-danger ${classError}`}>
            <div className="message-header">
              <p>Ups, hubo un error:</p>
              <button className="delete" aria-label="delete" onClick={this.handleLinkClose}></button>
            </div>
            <div className="message-body">
              <strong>{error}</strong>
            </div>
          </article>
        )}
        {isLogged && (
          <section className="section" style={{ marginTop: '3em' }}>
            <div className="container">
              <div className="columns is-multiline">
                {loading ? (
                  Array.from({ length: usersItems.length }, (_, index) => (
                    <div className="column is-3 is-one-quarter" key={index}>
                      <Skeleton width={500} height={282} />
                    </div>
                  ))
                ) : (
                  usersItems.length > 0 && (
                    usersItems.map(user => (
                      <div className="column is-3 is-one-quarter" key={user._id}>
                        <CardHome {...user}/>
                      </div>
                    )))
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.loginReducer.isLogged,
    classError: state.usersReducer.classError,
    usersItems: state.usersReducer.users,
    usersBackup: state.usersReducer.usersBackup,
    usersItemsCount: state.usersReducer.users.length,
    usersBackupCount: state.usersReducer.usersBackup.length,
    loading: state.usersReducer.loading,
    filters: state.usersReducer.filters,
    selectedFilter: state.usersReducer.selectedFilter,
    error: state.usersReducer.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsersItems: () => dispatch(getUsersRequest()),
    getUsersFiltered: (query) => dispatch(getUsersByFilter(query)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
