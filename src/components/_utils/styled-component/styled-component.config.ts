export type GetConfigOptionsProps =
  | 'getBackground'
  | 'getBorder'
  | 'getColor'
  | 'getEllipsis'
  | 'getFlex'
  | 'getFont'
  | 'getGutters'
  | 'getHeightWidth'
  | 'getRadius'
  | 'getShadow';
type GetConfigProps = {
  options?: GetConfigOptionsProps[];
  keys?: string[];
};

export const getConfig = (props: GetConfigProps) => {
  const { keys = [], options = [] } = props;
  const optionKeys = options?.reduce((list, option) => {
    switch (option) {
      case 'getBackground':
        return [...list, 'backgroundColor', 'backgroundImage'];
      case 'getBorder':
        return [...list, 'borderColor', 'borderWidth', 'borderStyle'];
      case 'getColor':
        return [...list, 'color'];
      case 'getEllipsis':
        return [...list, 'noWrap'];
      case 'getFlex':
        return [
          ...list,
          'alignItems',
          'flexDirection',
          'flexWrap',
          'flexGrow',
          'flexShrink',
          'gap',
          'justifyContent',
        ];
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
      case 'getRadius':
        return [...list, 'radius'];
      case 'getShadow':
        return [...list, 'boxShadow', 'elevation'];
      default:
        return [...list];
    }
  }, [] as string[]);
  const finalList = [...keys, ...optionKeys];
  return {
    shouldForwardProp: (prop: string) => !finalList.includes(prop),
  };
};
