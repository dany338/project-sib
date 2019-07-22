import React, { useState } from 'react'
import dayjs from 'dayjs'
// Call styled
import {
  UserCardWrapper,
  UserCardHeader,
  StyledHr,
  UserCardBody,
  UserCardFooter,
  UserCardSelected,
  UserCardHidden,
  StyledButton
} from './styled'

const CardHome = ({ username, name, lastname, email, lastLogin, date, props}) => {
  const [selected, setSelected] = useState(false)
  const [selectedClass, setSelectedClass] = useState('is-hidden')

  const dateLastLoginFormatted = dayjs(lastLogin).format('dddd[,] D [de] MMMM [de] YYYY')
  const dateRegisteredFormatted = dayjs(date).format('dddd[,] D [de] MMMM [de] YYYY')

  const handleSelected = () => {
    setSelected(!selected)
    setSelectedClass('')
  }

  const handleSubmit = () => {

  }

  return (
    <UserCardWrapper onClick={handleSelected}>
      <UserCardHidden className="is-hidden">
        <p>Dato 1</p>
        <p></p>
        <p>
          <StyledButton
            className="button is-info footer-value"
            onClick={handleSubmit}
          >
            Editar
          </StyledButton>
        </p>
      </UserCardHidden>
      <UserCardHeader>
        <div className="item-right"><span>{username}</span>{' '}<i className="fas fa-user-secret user"></i></div>
        <div>
          <img
            src="http://placehold.it/640x480"
            alt="SiB Colombia - User"
          />
        </div>
      </UserCardHeader>
      <StyledHr />
      <UserCardBody>
        <p>
          <span className="body-title-1">{dateLastLoginFormatted}{' '}{email}</span><br />
          <span className="body-title-2">{name}{' '}{lastname}</span>
        </p>
      </UserCardBody>
      <StyledHr />
      <UserCardFooter>
        {dateRegisteredFormatted}
      </UserCardFooter>
    </UserCardWrapper>
  )
}

export default CardHome
