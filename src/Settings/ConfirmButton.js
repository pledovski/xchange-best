import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';

const ConfirmButtonStyled = styled.div`
  marging: 20px;
  color: #9764c7;
  cursor: pointer;
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