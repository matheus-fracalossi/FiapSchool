import Svg, {SvgProps, Path} from 'react-native-svg';
export const FileCheck = ({color = '#fff', ...rest}: SvgProps) => (
  <Svg width={18} height={22} fill="none" {...rest}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M7 0a1 1 0 0 0-.707.293l-6 6A1 1 0 0 0 0 7v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H7Zm1 2h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8h5a1 1 0 0 0 1-1V2ZM6 6H3.414L6 3.414V6Zm7.768 5.64a1 1 0 1 0-1.536-1.28l-4.3 5.159-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067l5-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
