import styled from 'styled-components'

export const UserCardWrapper = styled.div`
  width: 276px;
  height: 350px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  border-radius: 6px;
  color: #616161;
  margin: 12px;
  padding: 15px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    border: 1px solid rgba(255,110,5,.5);
    transform: scale(1.025);

  }
`

export const UserCardSelected = styled.div`
  box-shadow: 0 0 40px rgba(0,0,0,.4);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  border: 0;
  opacity: 1;
  pointer-events: all;
  background-color: rgba(255,110,5,.9);
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .25s;
`

export const UserCardHidden = styled.div`
  display: none;
`

export const UserCardHeader = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  .item-right {
    justify-content: flex-end;
    position: absolute;
    right: 10px;
    font-weight: 600;
    align-items: center;

    .user {
      z-index: 1;
      width: 18px;
      height: 18px;
      margin-left: 2.5px;
      margin-top: -2px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

export const StyledHr = styled.hr`
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0;
  border-top: 1px solid #e9ebf1 !important;
`

export const UserCardBody = styled.div`
  font-size: 20px;
  line-height: 26px;
  display: flex;
  justify-content: flex-start;

  .body-title-1 {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.0376471px;
    color: #A3A3A3;
  }

  .body-title-2 {
    font-weight: 600;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.0423529px;
  }
`

export const UserCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledButton = styled.a`
  border-radius: 14px;
  background-color: #227edc;
`
