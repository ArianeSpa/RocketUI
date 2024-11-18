// === Import : NPM
import styled from 'styled-components';
import { get } from 'lodash';

// === Import : LOCAL
import { getConfig, getGutters } from '../../../lib';
import { getEllipsis } from '../../../theming';
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

  ${({ display, noWrap, width }: StyledTypoProps) => {
    if (display) return `display: ${display};`;
    if (noWrap) return 'display: block;';
    if (width) return 'display: inline-block;';
    return undefined;
  }};

  --color: ${({ theme, color }: StyledTypoProps) => {
    if (color) return get(theme?.palette, color, color);
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
