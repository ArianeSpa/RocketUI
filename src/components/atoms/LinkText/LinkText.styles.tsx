// === Import : NPM
import styled from 'styled-components';
import { StyledLinkTextProps } from './LinkText.types';

// === Import : Local
import { getConfig } from '../../_utils';
import { getColor, getFont, getGutters } from '../../../lib';

export const StyledLinkText = styled.a.withConfig(
  getConfig({
    options: ['getColor', 'getFont', 'getGutters'],
  })
)<StyledLinkTextProps>`
  text-decoration: underline;
  cursor: pointer;
  ${getColor}
  ${getFont}
  ${getGutters}
`;
