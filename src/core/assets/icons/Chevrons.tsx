import Svg, {SvgProps, Path} from 'react-native-svg';

export const ChevronDown = ({color = '#29F4D5', ...rest}: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...rest}>
    <Path
      fill={color}
      d="M13.814 3.368a.636.636 0 0 0-.9 0L7 9.282 1.086 3.368a.636.636 0 0 0-.9.9l6.364 6.364a.636.636 0 0 0 .9 0l6.364-6.364a.636.636 0 0 0 0-.9Z"
    />
  </Svg>
);

export const ChevronUp = ({color = '#29F4D5', ...rest}: SvgProps) => (
  <Svg width={14} height={8} fill="none" {...rest}>
    <Path
      fill={color}
      d="M13.814 7.632a.636.636 0 0 1-.9 0L7 1.718 1.086 7.632a.636.636 0 0 1-.9-.9L6.55.368a.636.636 0 0 1 .9 0l6.364 6.364a.636.636 0 0 1 0 .9Z"
    />
  </Svg>
);
