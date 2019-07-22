import styled from 'styled-components'

export const StyledLink = styled.a`
  color: #ffffff;
  pointer-events: ${(props) => props.logged ? 'auto' : 'none' }
`
