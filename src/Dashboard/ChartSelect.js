import styled from 'styled-components';
import {fontSize3, color5, darkTileBackground} from '../Shared/Styles';

export default styled.select`
  ${darkTileBackground}
  ${fontSize3}
  border: 1px solid ${color5};
  color: ${color5};
  margin: 5px;
  height: 25px;
  float: right;
`;