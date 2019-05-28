import React from 'react';
import styled, {css} from 'styled-components';

const CoinImage = styled.img`
  height: 50px;
  ${props => props.spotLight && css`
    height: 200px;
    display: block;
    margin: auto;
  `}
`

export default ({coin, spotLight}) => {
  return <CoinImage
  spotLight={spotLight}
    alt={coin.coinSymbol}
    src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />;
}