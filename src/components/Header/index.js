import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userFormChangeRequest, createUserRequest, updateUserRequest, deleteUserRequest } from '../../store'
import { StyledButton } from './styled'
import nanoid from 'nanoid'

const Header = (props) => {
  const { isLogged, userForm, userFormChange, createUserSend, updateUserSend, deleteUserSend } = props
  const { _id, username, password, email, name, lastname, ubicacion, perfil } = userForm
  const [errorField, setErrorFieldText] = useState(false)
  const [perfilField, setPerfilField] = useState(perfil)

  const handleChange = event => {
    const { name, value } = event.target
    console.log('perfilField', perfilField)
    console.log(name, value)
    // const newUserForm = { ...userForm, [name]: value }
    if(name === 'perfil' && value === 'Select your profile') {
      setErrorFieldText(true)
    } else if(name === 'perfil' && value !== 'Select your profile') {
      setPerfilField(value)
      userFormChange(name, value)
      setErrorFieldText(false)
    }
    else {
      userFormChange(name, value)
      setErrorFieldText(false)
    }
  }

  const handleSubmit = () => {

    for (const name in userForm) {
      const value = userForm[name]
      if(value !== null) {
        if(value !== '') {
          continue;
        } else {
          setErrorFieldText(true)
          break;
        }
      }
    }

    if(!errorField) {
      if(_id === null) {
        console.log('userForm create', userForm)
        createUserSend(userForm)
      }
    }
    console.log('errorField', errorField)
    // if(username !== '' && password !== '' && email !== '' && name !== '' && lastname !== '' && ubicacion !== '' && perfil !== '') {
    //   console.log('handleSubmit', userForm)
    //   if(_id !== null) {
    //     createUserSend(userForm)
    //   } else {
    //     updateUserSend(userForm)
    //   }
    // } else {
    //   setErrorFieldText(true)
    // }
  }

  const handleDelete = () => {
    if(_id !== null) {
      deleteUserSend(userForm)
    }
  }

  return (
    <section className="hero is-small is-primary is-bold">
      <div className="hero-head">
        <div className="container">
          <h1 className="title">
            Registro y/o Actualizaci&oacute;n de usuarios
          </h1>
          <h2 className="subtitle">
            {(_id !== null) ? `Registre un nuevo usuario` : `Actualice la información del usuario seleccionado`}
          </h2>
        </div>
      </div>
      {isLogged && (
        <div className="hero-body">
          <div className="container has-text-centered">

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      onChange={handleChange}
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
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="password"
                      onChange={handleChange}
                      name="password"
                      placeholder="Enter your password"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user-secret"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      onChange={handleChange}
                      name="name"
                      placeholder="Enter your first name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-male"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      onChange={handleChange}
                      name="lastname"
                      placeholder="Enter your last name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-male"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      onChange={handleChange}
                      name="email"
                      placeholder="Enter your email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-at"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">
                    <div className="select">
                      <select name="perfil" value={perfilField} onChange={handleChange}>
                        <option key={nanoid()}>Select your profile</option>
                        <option key={nanoid()} value="user">user</option>
                        <option key={nanoid()} value="admin">admin</option>
                      </select>
                    </div>
                    <div className="icon is-small is-left">
                      <i className="fas fa-globe"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      onChange={handleChange}
                      name="ubicacion"
                      placeholder="Enter your ubicación"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-street-view"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field">
              <p className="control">
                <StyledButton
                  error={errorField}
                  className="button is-info footer-value"
                  onClick={handleSubmit}
                >
                  Save
                </StyledButton>
              </p>
              {(_id !== null) && (
                <p className="control">
                  <StyledButton
                    error={errorField}
                    className="button is-danger"
                    onClick={handleDelete}
                  >
                    <span className="icon">
                      <i className="fas fa-user-slash"></i>
                    </span>
                    <span>Delete</span>
                  </StyledButton>
                </p>
              )}
              {errorField && (
                <>
                  <hr />
                  <p style={{ color: '#ee6e73 !important'}}>Fill missing fields!</p>
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

const mapStateToProps = state => {
  return {
    isLogged: state.loginReducer.isLogged,
    userForm: state.usersReducer.userForm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userFormChange: (name, value) => dispatch(userFormChangeRequest(name, value)),
    createUserSend: (user) => dispatch(createUserRequest(user)),
    updateUserSend: (user) => dispatch(updateUserRequest(user)),
    deleteUserSend: (user) => dispatch(deleteUserRequest(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
