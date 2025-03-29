import {fireEvent} from '@testing-library/react-native';
import {renderComponent} from '../../../../test-utils';
import {defaultTheme} from '../../../../themes';
import {Button} from '../Button';
import {ButtonProps} from '../types';

const mockButtonProps = {
  label: 'Teste',
};

const renderedComponent = (customProps?: Partial<ButtonProps>) =>
  renderComponent(<Button {...customProps} {...mockButtonProps} />);

describe('<Button />', () => {
  it('renders the button label correctly', () => {
    const {tree} = renderedComponent();

    expect(tree).toHaveTextContent(mockButtonProps.label);
  });

  it('renders the button label with the disabled color when disabled prop is true', () => {
    const {component} = renderedComponent({disabled: true});

    const {getByTestId} = component;

    const label = getByTestId('label');

    expect(label).toHaveStyle({
      color: defaultTheme.colors.text.disabled,
    });
  });

  it('renders the <Loader /> when loading prop is true', () => {
    const {component} = renderedComponent({loading: true});

    const {getByTestId} = component;

    const loader = getByTestId('loader');

    expect(loader).toBeTruthy();
  });

  it('should be disabled when loading is true', () => {
    const onPress = jest.fn();

    const {component} = renderedComponent({loading: true, onPress});

    const {getByTestId} = component;

    const button = getByTestId('button');

    fireEvent.press(button);

    expect(onPress).not.toHaveBeenCalled();
  });
});
