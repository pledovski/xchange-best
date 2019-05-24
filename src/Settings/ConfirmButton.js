import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import {fontSize1, greenBoxShadow, color1} from '../Shared/Styles'

const ConfirmButtonStyled = styled.div`
  marging: 20px;
  color: ${color1}
  ${fontSize1}
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

export default () => {
  return <AppContext.Consumer>
    {({confirmFavorites}) => 
    <CenterDiv>
      <ConfirmButtonStyled onClick={confirmFavorites}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
    }
  </AppContext.Consumer>;
}