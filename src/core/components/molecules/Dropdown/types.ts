export type DropdownProps<T> = {
  onPress: () => void;
  opened: boolean;
  placeholder?: string;
  options: T[];
  onValueSelect: (object: T) => void;
  renderTitle: (object: T) => string;
  value: T | null;
};
