// === Import : NPM
import styled from 'styled-components';

// === Import : LOCAL
import { getConfig } from '../../_utils';
import {
  getBackground,
  getBorder,
  getColor,
  getGutters,
  getHeightWidth,
  getRadius,
  getShadow,
} from '../../../lib';
import { StyledPaperProps } from './Paper.types';

export const StyledPaper = styled.div.withConfig(
  getConfig({
    options: [
      'getBackground',
      'getBorder',
      'getGutters',
      'getHeightWidth',
      'getRadius',
      'getShadow',
    ],
  })
)<StyledPaperProps>`
  box-sizing: border-box;

  ${getBackground}
  ${getBorder}
  ${getColor}
  ${getGutters}
  ${getHeightWidth}
  ${getRadius}
  ${getShadow}
`;
