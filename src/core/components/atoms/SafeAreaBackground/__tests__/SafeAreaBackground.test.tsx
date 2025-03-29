import {SafeAreaBackground} from '../SafeAreaBackground';
import {renderComponent} from '../../../../test-utils';
import {defaultTheme} from '../../../../themes';

const componentTree = () => renderComponent(<SafeAreaBackground />);

describe('<SafeAreaBackground />', () => {
  it('Should have correct style', () => {
    const tree = componentTree();

    expect(tree).toHaveStyle({
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      backgroundColor: defaultTheme.colors.background,
    });
  });
});
