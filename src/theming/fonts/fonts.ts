import { CSSProperties } from 'styled-components';
import { NestedKeyOf } from '../_utils/types';

export type FontDefinitionProps = {
  fontFamily?: CSSProperties['fontFamily'];
  fontSize?: CSSProperties['fontSize'];
  fontStretch?: CSSProperties['fontStretch'];
  fontStyle?: CSSProperties['fontStyle'];
  fontVariant?: CSSProperties['fontVariant'];
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
};

export type FontThemeProps = {
  h1?: FontDefinitionProps;
  h2?: FontDefinitionProps;
  h3?: FontDefinitionProps;
  h4?: FontDefinitionProps;
  h5?: FontDefinitionProps;
  h6?: FontDefinitionProps;
  body?: FontDefinitionProps;
  subtitle?: FontDefinitionProps;
  button?: FontDefinitionProps;
};

export type FontThemeKeys = NestedKeyOf<FontThemeProps>;
export const defaultFonts: FontThemeProps = {
  h1: {
    fontFamily: 'Georgia',
    fontSize: '32px',
    fontVariant: 'small-caps',
    fontWeight: 800,
    lineHeight: '40px',
  },
  h2: {
    fontFamily: 'Georgia',
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '36px',
  },
  h3: {
    fontFamily: 'Georgia',
    lineHeight: '32px',
    fontSize: '24px',
    fontWeight: 700,
  },
  h4: {
    fontFamily: 'Georgia',
    lineHeight: '28px',
    fontSize: '20px',
    fontWeight: 600,
  },
  h5: {
    fontFamily: 'Georgia',
    lineHeight: '24px',
    fontSize: '18px',
    fontWeight: 600,
  },
  h6: {
    fontFamily: 'Georgia',
    lineHeight: '20px',
    fontSize: '16px',
    fontWeight: 600,
  },
  subtitle: {
    fontFamily: 'cursive',
    lineHeight: '16px',
    fontSize: '16px',
    fontStyle: 'italic',
  },
  body: {
    fontFamily: 'Arial',
    fontSize: '14px',
  },
};
