// === Import : NPM
import styled from 'styled-components';
import { get } from 'lodash';

// === Import : LOCAL
import { getConfig } from '../../../lib';
import { getEllipsis, getGutters } from '../../../theming';
import { StyledTypoProps } from './Typo.types';

export const StyledTypo = styled.span.withConfig(
  getConfig([
    'align',
    'color',
    'display',
    'fontWeight',
    'height',
    'noWrap',
    'variant',
    'width',
  ])
)<StyledTypoProps>`
  // Force margin, if as="h1" is passed, native html tag h1 has margin-bottom
  margin: 0;

  --display: ${({ display, noWrap, width }: StyledTypoProps) => {
    if (display) return display;
    if (noWrap) return 'block';
    if (width) return 'inline-block';
    return 'inline';
  }};
  display: var(--display);

  --color: ${({ theme, color }: StyledTypoProps) => {
    if (color) return get(theme?.colors, color, color);
    return 'currentColor';
  }};
  color: var(--color);

  text-align: ${({ align }: StyledTypoProps) => align ?? 'inherit'};
  ${({ width }: StyledTypoProps) => (width ? `width: ${width};` : '')}
  ${({ height }: StyledTypoProps) => (height ? `height: ${height};` : '')}
  ${({ fontWeight }: StyledTypoProps) =>
    fontWeight ? `font-weight: ${fontWeight};` : ''}


  ${getEllipsis}
  ${getGutters}
`;
