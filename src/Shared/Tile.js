import styled from 'styled-components';
import {subtleBoxShadow, purpleBackgroundColor, greenBoxShadow, redBoxShadow, darkTileBackground} from './Styles';

export const Tile = styled.div`\
  // ${subtleBoxShadow}
  ${darkTileBackground}
  padding: 10px;
`

export const SelectableTile = styled(Tile)`
&:hover {
  cursor: pointer;
  ${greenBoxShadow}
}
`

export const DeletableTile = styled(SelectableTile)`
&:hover {
  cursor: pointer;
  ${redBoxShadow}
}
`
export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`