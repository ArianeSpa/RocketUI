type GetConfigOptionsProps =
  | 'getColor'
  | 'getEllipsis'
  | 'getFont'
  | 'getGutters'
  | 'getHeightWidth';
type GetConfigProps = {
  options?: GetConfigOptionsProps[];
  keys?: string[];
};

export const getConfig = (props: GetConfigProps) => {
  const { keys = [], options = [] } = props;
  const optionKeys = options?.reduce((list, option) => {
    switch (option) {
      case 'getColor':
        return [...list, 'color'];
      case 'getEllipsis':
        return [...list, 'noWrap'];
      case 'getGutters':
        return [
          ...list,
          'm',
          'mx',
          'my',
          'mt',
          'mr',
          'mb',
          'ml',
          'p',
          'px',
          'py',
          'pt',
          'pr',
          'pb',
          'pl',
        ];
      case 'getHeightWidth':
        return [...list, 'height', 'fullHeight', 'width', 'fullWidth'];
      case 'getFont':
        return [
          ...list,
          'variant',
          'fontFamily',
          'fontSize',
          'fontStretch',
          'fontStyle',
          'fontVariant',
          'fontWeight',
          'lineHeight',
        ];

      default:
        return [...list, option];
    }
  }, [] as string[]);
  const finalList = [...keys, ...optionKeys];
  return {
    shouldForwardProp: (prop: string) => !finalList.includes(prop),
  };
};
