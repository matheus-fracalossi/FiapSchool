import {TouchableOpacityProps} from 'react-native';

export type ButtonProps = {
  label: string;
  loading?: boolean;
} & TouchableOpacityProps;
