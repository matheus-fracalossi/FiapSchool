import {renderComponent} from '../../../../../../jest/test-utils';
import {defaultTheme} from '../../../../themes';
import {SafeAreaBackground} from '../Views';

const renderedComponent = () => renderComponent(<SafeAreaBackground />);

describe('<SafeAreaBackground />', () => {
  it('Should have correct style', () => {
    const {tree} = renderedComponent();

    expect(tree).toHaveStyle({
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      backgroundColor: defaultTheme.colors.background,
    });
  });
});
