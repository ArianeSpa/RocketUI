export type GetEllipsisProps = {
  noWrap?: boolean;
};
export const getEllipsis = ({ noWrap }: GetEllipsisProps) => {
  if (!noWrap) return;
  return `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `;
};
