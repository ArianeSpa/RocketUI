// === Import : NPM
import styled from 'styled-components';

// === Import : LOCAL
import { StyledFlexProps } from './Flex.types';
import { getConfig } from '../../_utils';
import {
  getBackground,
  getFlex,
  getGutters,
  getHeightWidth,
} from '../../../lib';

export const StyledFlex = styled.div.withConfig(
  getConfig({
    options: ['getBackground', 'getFlex', 'getGutters', 'getHeightWidth'],
  })
)<StyledFlexProps>`
  overflow: hidden;
  display: flex;
  box-sizing: border-box;

  ${getBackground}
  ${getFlex}
  ${getGutters}
  ${getHeightWidth}
`;
