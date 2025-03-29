import {renderComponent} from '../../../../test-utils';
import {defaultTheme} from '../../../../themes';
import {Text} from '../Text';

const componentTree = () => renderComponent(<Text />);

describe('<Text />', () => {
  it('Should have correct base style', () => {
    const tree = componentTree();

    expect(tree).toHaveStyle({
      color: defaultTheme.colors.text.primary,
      fontFamily: defaultTheme.typography.weights.regular,
      fontSize: defaultTheme.typography.sizes.base,
    });
  });
});
