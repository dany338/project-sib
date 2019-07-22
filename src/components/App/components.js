import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { getUserMeRequest } from '../../store'
// Call Components
import Nav from '../Nav'
import Header from '../Header'
import Filters from '../Filters'

const Components = (props) => {
  const { isLogged } = props

  useEffect(() => {
    console.log('component components', isLogged)
  }, [isLogged])

  return (
    <>
      {isLogged && (
        <>
          <Nav />
          <Header />
          <Filters />
        </>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    login: state.loginReducer.login,
    isLogged: state.loginReducer.isLogged,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserMe: (login) => dispatch(getUserMeRequest(login)),
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Components)
