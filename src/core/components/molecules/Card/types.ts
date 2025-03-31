export type CardProps = {
  title: string;
  className: string;
  selected: boolean;
  onPress: () => void;
  disabled?: boolean;
};
