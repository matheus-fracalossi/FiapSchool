import {fireEvent} from '@testing-library/react-native';
import {renderComponent} from '../../../../../../jest/test-utils';
import {defaultTheme} from '../../../../themes';
import {Input} from '../Input';

const mockProps = {
  title: 'Título',
};

const renderedComponent = () => renderComponent(<Input {...mockProps} />);

describe('<Input />', () => {
  it('Should render title', () => {
    const {tree} = renderedComponent();

    expect(tree).toHaveTextContent(mockProps.title);
  });
  it('Should render blur color on border bottom if is not focused', () => {
    const {tree} = renderedComponent();

    const textInput = tree.children.find(
      component => component.type === 'TextInput',
    )!;

    expect(textInput).toHaveStyle({
      borderBottomColor: defaultTheme.colors.blur,
    });
  });

  it('Should render primary color on border bottom if is focused', () => {
    const {component} = renderedComponent();

    const {getByTestId} = component;

    const textInput = getByTestId('text-input');

    fireEvent(textInput, 'focus');

    const styles = textInput.props.style;
    expect(styles.borderBottomColor).toBe(defaultTheme.colors.text.primary);
  });
});
