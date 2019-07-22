import styled from 'styled-components'

export const LoginCardWrapper = styled.div`
  width: 500px;
  height: 282px;
  box-shadow: 0px 8px 28px rgba(134, 118, 251, 0.6);
  background: #ffffff;
  border-radius: 6px;
  color: #616161;
  margin: 12px;
  padding: 15px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`

export const LoginCardBody = styled.div`
  font-size: 20px;
  line-height: 26px;
  justify-content: center !important;
`

export const LoginCardFooter = styled.div`
  display: flex;
  justify-content: space-between;

  .footer-title {
    opacity: 0.8;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    .error {
      color: #ee6e73 !important;
    }
  }

  .footer-value {
    font-weight: 600;
  }
`

export const StyledInput = styled.input`
  width: 230px;
  height: 35px;
  border-radius: 10px;
  border: solid 1px #cacaca;
`

export const StyledButton = styled.a`
  width: 110px;
  height: 40px;
  border-radius: 14px;
  background-color: #227edc;
  pointer-events: ${(props) => props.error ? 'none' : 'auto' }
`
