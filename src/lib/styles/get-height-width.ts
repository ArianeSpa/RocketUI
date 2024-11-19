// === Import : NPM
import { CSSProperties } from 'styled-components';

export type GetHeightWidthProps = {
  /**
   * The height of the component.
   */
  height?: CSSProperties['height'];

  /**
   * The width of the component.
   */
  width?: CSSProperties['width'];

  /**
   * Set the width of the component to '100%'
   */
  fullWidth?: boolean;

  /**
   * Set the height of the component to '100%'
   */
  fullHeight?: boolean;
};
export const getHeightWidth = (props: GetHeightWidthProps) => {
  if (!props) return;
  const { height, fullHeight, width, fullWidth } = props;

  const heightStyle =
    fullHeight || height
      ? `height: ${fullHeight ? '100%' : height};`
      : undefined;
  const widthStyle =
    fullWidth || width ? `width: ${fullWidth ? '100%' : width};` : undefined;

  return [heightStyle, widthStyle].filter(Boolean).join(' ');
};
