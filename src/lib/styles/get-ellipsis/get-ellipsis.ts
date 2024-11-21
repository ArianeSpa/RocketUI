export type GetEllipsisProps = {
  /**
   * When set to `true`, the text will truncat instead of wrap.
   * The text overflow will display ellipsis.
   * By default, Typo is a <span> tag, it means display is inline.
   * If 'noWrap' is set to true, we force display to 'block' to allow overflow.
   * A width also need to be set
   * @default false
   */
  noWrap?: boolean;
};
export const getEllipsis = ({ noWrap }: GetEllipsisProps) => {
  if (!noWrap) return;
  return 'text-overflow: ellipsis; white-space: nowrap; overflow: hidden;';
};
