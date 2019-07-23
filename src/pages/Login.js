import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import CardLogin from '../components/CardLogin'
// import { getUserMeRequest } from '../store'
// import { fetchProductsFailure } from '../actions'

class Login extends Component {
  state = {
    classError: ''
  }

  componentDidMount() {
    // console.log('1) componentDidMount dispara getProductsItems ')
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLogged, history } = this.props
    // console.log('isLogged', isLogged)
    if(isLogged) {
      console.log('isLogged', isLogged)
      history.push('/home')
    }
    if(prevState.error !== this.state.error) {
      // console.log('entro')

    }
  }

  handleLinkClose = () => {
    this.setState({ classError: 'is-hidden' })
  }

  render() {
    const { classError } = this.state
    const { loading, isLogged, errorLogin } = this.props
    // const products = useSelector(state => state.loginReducer.products)
    // const isLoading = useSelector(state => state.loginReducer.loading)
    // const isError = useSelector(state => state.loginReducer.error)
    // const dispatch = useDispatch()
    return (
      <div>
        <h1 className="is-size-2" style={{ background: 'hsl(204, 86%, 53%)' }}>Página Login</h1>
        {errorLogin && (
          <article className={`message is-danger ${classError}`}>
            <div className="message-header">
              <p>Ups, hubo un error:</p>
              <button className="delete" aria-label="delete" onClick={this.handleLinkClose}></button>
            </div>
            <div className="message-body">
              <strong>{errorLogin}</strong>
            </div>
          </article>
        )}
        <section className="section" style={{ marginTop: '3em' }}>
          <div className="container">
            <div className="columns">
              {loading ? (
                <div className="column is-full">
                  <Skeleton width={500} height={282} />
                </div>
              ) : (
              !isLogged && (
                <div className="column is-full">
                  <CardLogin />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.loginReducer.isLogged,
    errorLogin: state.loginReducer.errorLogin,
    loading: state.loginReducer.loading,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserMe: () => dispatch(getUserMeRequest()),
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Login)
