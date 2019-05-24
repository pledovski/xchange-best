import styled from 'styled-components';
import {subtleBoxShadow, purpleBackgroundColor, greenBoxShadow, redBoxShadow} from './Styles';

export const Tile = styled.div`\
  ${subtleBoxShadow}
  ${purpleBackgroundColor}
  padding: 10px;
`

export const SelectableTile = styled(Tile)`
&:hover {
  cursor: pointer;
  ${greenBoxShadow}
}
`