import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest, getUserMeRequest } from '../../store'
// Call styled
import { StyledLink } from './styled'

const Nav = (props) => {
  const { login, isLogged, logoutSend, getUserMe, history, userMe } = props
  let usernameInfo = ''

  if( userMe !== null ) {
    const { username } = userMe
    console.log('username', username)
    usernameInfo = username
  }

  const handleLogout = () => {
    logoutSend(login)
  }

  useEffect(() => {
    if(!isLogged) history.push('/')
    if(userMe === null) getUserMe(login)
  }, [isLogged, history, userMe, getUserMe, login])

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a href="https://sibcolombia.net/" rel="noopener noreferrer" target="_blank">
          <img
            src="https://www.sibcolombia.net/wp-content/uploads/2018/06/logo-sib.svg"
            alt="SiB Colombia - Biodiversidad"
            width="112"
            height="28"
          />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/home">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                {usernameInfo}
              </p>
              <p className="control">
                <StyledLink
                  className="bd-tw-button button is-dark"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  logged={isLogged}
                  onClick={handleLogout}
                >
                  <span className="icon">
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span>
                    Logout
                  </span>
                </StyledLink>
              </p>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    userMe: state.usersReducer.userMe,
    login: state.loginReducer.login,
    isLogged: state.loginReducer.isLogged,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutSend: (login) => dispatch(logoutRequest(login)),
    getUserMe: (login) => dispatch(getUserMeRequest(login)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
