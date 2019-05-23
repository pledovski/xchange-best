import React from 'react';
import styled, {css} from 'styled-components';

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
    color: #9764c7;
    border-bottom: #9764c7 1px solid;
  `}
`

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}) {
  return (
  <ControlButtonElem active={active}>
    {toProperCase(name)}
  </ControlButtonElem>
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