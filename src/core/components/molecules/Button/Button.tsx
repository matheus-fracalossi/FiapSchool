import {Column, Loader, Text} from '../../atoms';
import {ButtonContainer} from './styles';
import {ButtonProps} from './types';

export const Button = ({label, loading, disabled, ...rest}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <ButtonContainer {...rest} disabled={isDisabled} testID="button">
      <Column height={24} align="center" justify="center">
        {loading ? (
          <Loader testID="loader" themeColor="background" />
        ) : (
          <Text
            testID="label"
            size="medium"
            weight="medium"
            color={isDisabled ? 'disabled' : 'secondary'}>
            {label}
          </Text>
        )}
      </Column>
    </ButtonContainer>
  );
};
