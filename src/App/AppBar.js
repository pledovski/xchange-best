import React from 'react';
import styled, {css} from 'styled-components';
import {color5} from '../Shared/Styles';
import {AppContext} from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #099a97;
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`
const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    color: ${color5};
    border-bottom: ${color5} 1px solid;
  `}
  ${props => props.hidden && css`
    display:none
  `}
`

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}) {
  return (
    <AppContext.Consumer>
      {({firstVisit, page, setPage}) => (
        <ControlButtonElem 
          active={page === name}
          onClick={()=> setPage(name)}
          hidden={firstVisit && name === 'dashboard'}
          >
          {toProperCase(name)}
        </ControlButtonElem>)}
    </AppContext.Consumer>
  )
}

export default () => {
  return (
    <Bar> 
      <Logo>xChange.best</Logo>
      <div></div>
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/>
    </Bar>)
}