// === Import : NPM
import styled from 'styled-components';

// === Import : LOCAL
import {
  getColor,
  getEllipsis,
  getFont,
  getGutters,
  getHeightWidth,
} from '../../../lib';
import { StyledTypoProps } from './Typo.types';
import { getConfig } from '../../_utils';

export const StyledTypo = styled.span.withConfig(
  getConfig({
    options: [
      'getColor',
      'getEllipsis',
      'getFont',
      'getGutters',
      'getHeightWidth',
    ],
    keys: ['align', 'display'],
  })
)<StyledTypoProps>`
  // Force the native margin of certain html tags (headings, etc.)
  margin: 0;

  ${({ display, noWrap, width, fullWidth }: StyledTypoProps) => {
    if (display) return `display: ${display};`;
    if (noWrap) return 'display: block;';
    if (width || fullWidth) return 'display: inline-block;';
    return undefined;
  }};

  text-align: ${({ align }: StyledTypoProps) => align ?? 'inherit'};

  ${getColor}
  ${getEllipsis}
  ${getFont}
  ${getGutters}
  ${getHeightWidth}
`;
