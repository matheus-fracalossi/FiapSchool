import {PropsWithChildren} from 'react';

export type BaseProps = {
  onPress: () => void;
  opened: boolean;
  title: string;
};

export type SecondaryAccordionProps = BaseProps & PropsWithChildren;

export type AccordionProps<T> =
  | (BaseProps & {
      renderTitle: (object: T) => string;
      options: T[];
    })
  | SecondaryAccordionProps;
