// === Import : NPM
import { get, merge } from 'lodash';

// === Import : LOCAL
import { Theme, FontDefinitionProps, FontThemeKeys } from '../../../theming';

const getFontDefinition = (props: FontDefinitionProps) => {
  const {
    fontFamily,
    fontSize,
    fontStretch,
    fontStyle,
    fontVariant,
    fontWeight,
    lineHeight,
  } = props;
  const fontDefinition = [];

  if (fontFamily) fontDefinition.push(`font-family: ${fontFamily};`);
  if (fontSize) fontDefinition.push(`font-size: ${fontSize};`);
  if (fontStretch) fontDefinition.push(`font-stretch: ${fontStretch};`);
  if (fontStyle) fontDefinition.push(`font-style: ${fontStyle};`);
  if (fontVariant) fontDefinition.push(`font-variant: ${fontVariant};`);
  if (fontWeight) fontDefinition.push(`font-weight: ${fontWeight};`);
  if (lineHeight) fontDefinition.push(`line-height: ${lineHeight};`);

  return fontDefinition;
};

export type GetFontProps = {
  /**
   * The font of the component.
   *
   * It supports default theme font, custom theme font or any other font style (fontWeight, fontSize, etc.).
   * See docummentation to learn how to add new theme styles or override the default theme.
   * [theme customization guide](@todo set link).
   * @default 'body' (size: 14px, family: arial)
   */
  variant?: FontThemeKeys;
  theme?: Theme;
} & FontDefinitionProps;
export const getFont = ({
  variant = 'body',
  theme,
  ...fontProps
}: GetFontProps) => {
  const fontVariantDefinition = get(theme?.fonts, variant);
  const mergedStyle = merge(fontVariantDefinition, fontProps);
  if (Object.keys(mergedStyle).length === 0) return '';
  return getFontDefinition(mergedStyle);
};
