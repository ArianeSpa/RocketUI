// === Import : LOCAL
import { convertGutterSize } from '../_utils';
import { Theme } from '../../../theming';

export type GetFlexProps = {
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
  flexGrow?: number;
  flexShrink?: number;
  gap?: number;
  justifyContent?: string;
  theme?: Theme;
};

export const getFlex = ({ theme, ...flexProps }: GetFlexProps) => {
  const styles = [];

  // Set default styles
  const { alignItems, justifyContent, flexDirection, gap } = flexProps;
  styles.push(`align-items: ${alignItems ?? 'center'};`);
  styles.push(`justify-content: ${justifyContent ?? 'center'};`);
  styles.push(`flex-direction: ${flexDirection ?? 'column'};`);
  styles.push(
    `gap: ${convertGutterSize({ value: gap ?? 0, gutter: theme?.gutter })};`
  );

  // Set optional styles
  const { flexWrap, flexGrow, flexShrink } = flexProps;
  if (flexWrap) styles.push(`flex-wrap: ${flexWrap};`);
  if (flexGrow) styles.push(`flex-grow: ${flexGrow};`);
  if (flexShrink) styles.push(`flex-shrink: ${flexShrink};`);

  return styles;
};
