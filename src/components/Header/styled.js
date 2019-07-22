import styled from 'styled-components'

export const StyledButton = styled.a`
  pointer-events: ${(props) => props.error ? 'auto' : 'none' }
`
