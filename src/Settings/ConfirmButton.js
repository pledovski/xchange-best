import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import {fontSize1, greenBoxShadow, greenBoxShadow2, color5} from '../Shared/Styles'

const ConfirmButtonStyled = styled.div`
  marging: 20px;
  color: ${color5}
  ${fontSize1}
  padding: 10px;
  margin: 20px 0;
  cursor: pointer;
  ${greenBoxShadow}
  &:hover {
    ${greenBoxShadow2}
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