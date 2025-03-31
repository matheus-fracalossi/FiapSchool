import {
  FlatList,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';
import {ChevronDown, ChevronUp} from '../../../assets/icons';
import {Column, Row, Text} from '../../atoms';
import {AccordionProps, SecondaryAccordionProps} from './types';
import {AccordionItemContainer} from './styles';

export const ItemPrimary = ({children, ...rest}: TouchableHighlightProps) => (
  <AccordionItemContainer {...rest}>
    <Text size="small">{children}</Text>
  </AccordionItemContainer>
);

export const ItemSecondary = ({
  onPress,
  opened,
  title,
  children,
}: SecondaryAccordionProps) => {
  return (
    <Column>
      <TouchableHighlight onPress={onPress}>
        <Row align="center">
          <Text flex={1} size="small" weight="bold">
            {title.toUpperCase()}
          </Text>
          {!opened ? <ChevronDown /> : <ChevronUp />}
        </Row>
      </TouchableHighlight>
      {opened && (
        <Column width={'100%'} p="4px 0px 12px" br={8}>
          {children}
        </Column>
      )}
    </Column>
  );
};

export const Accordion = <T,>({
  onPress,
  opened,
  title,
  ...rest
}: AccordionProps<T>) => {
  return (
    <Column>
      <TouchableHighlight onPress={onPress}>
        <Row bg="lightestBackground" p="36px 16px" br={8} align="center">
          <Text flex={1} color="cta" weight="bold">
            {title.toUpperCase()}
          </Text>
          {!opened ? <ChevronDown /> : <ChevronUp />}
        </Row>
      </TouchableHighlight>
      {opened && (
        <Column width={'100%'} p="12px 16px" br={8}>
          {('children' in rest && rest.children) || (
            <FlatList
              scrollEnabled={false}
              bounces={false}
              data={'options' in rest ? rest.options : null}
              renderItem={({item: option}) => (
                <ItemPrimary>
                  {'renderTitle' in rest && rest.renderTitle(option)}
                </ItemPrimary>
              )}
            />
          )}
        </Column>
      )}
    </Column>
  );
};

Accordion.ItemPrimary = ItemPrimary;
Accordion.ItemSecondary = ItemSecondary;
