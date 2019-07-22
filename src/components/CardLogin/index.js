import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginFormChangeRequest, loginRequest } from '../../store'
// Call Styled
import {
  LoginCardWrapper,
  LoginCardHeader,
  LoginCardBody,
  LoginCardFooter,
  StyledInput,
  StyledButton
} from './styled'

const CardLogin = (props) => {
  const { login, loginFieldChange, loginSend, isLogged } = props
  const { username, password } = login
  const [usernameText, setUsernameText] = useState(username)
  const [passwordText, setPasswordText] = useState(password)
  const [errorField, setErrorFieldText] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target
    // const newLogin = { ...login, [name]: value }
    if(name === 'username') setUsernameText(value)
    if(name === 'password') setPasswordText(value)
    // console.log('handleChange', name, value)
    loginFieldChange(name, value)
    setErrorFieldText(false)
  }

  const handleSubmit = () => {
    if(usernameText !== '' && passwordText !== '') {
      // console.log('handleSubmit', login)
      loginSend(login)
    } else {
      setErrorFieldText(true)
    }
  }

  return (
    <LoginCardWrapper>
      <LoginCardHeader>
        <p>Login</p>
        <p><i className="fas fa-user-secret"></i></p>
      </LoginCardHeader>
      <LoginCardBody>
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <StyledInput
                onChange={handleChange}
                type="text"
                className="input"
                name="username"
                placeholder="Enter your username"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <StyledInput
                onChange={handleChange}
                type="password"
                className="input"
                name="password"
                placeholder="Enter your password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
      </LoginCardBody>
      <LoginCardFooter>
        <div className="field">
          <p className="footer-title">Ingrese sus credenciales</p>
          <p className="control">{/*{...errorField ? 'disabled=""' : ''}*/}
            <StyledButton
              error={errorField}
              className="button is-info footer-value"
              onClick={handleSubmit}
            >
              Login
            </StyledButton>
          </p>
          {errorField && (
            <>
              <hr />
              <p className="footer-title error">Fill missing fields!</p>
            </>
          )}
        </div>
      </LoginCardFooter>
    </LoginCardWrapper>
  )
}

// CardLogin.propTypes = {
//   login: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//   })
// }

const mapStateToProps = state => {
  return {
    login: state.loginReducer.login,
    isLogged: state.loginReducer.isLogged,
    error: state.loginReducer.error,
    loading: state.loginReducer.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginSend: (login) => dispatch(loginRequest(login)),
    loginFieldChange: (name, value) => dispatch(loginFormChangeRequest(name, value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardLogin)
