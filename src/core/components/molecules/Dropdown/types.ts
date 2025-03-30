export type DropdownProps<T> = {
  onPress: () => void;
  opened: boolean;
  placeholder: string;
  options: T[];
  value: T | null;
  renderValue: (object: T) => string;
  onValueSelect: (object: T) => void;
};
