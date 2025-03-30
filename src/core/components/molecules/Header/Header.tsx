import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image, Row} from '../../atoms';
import {Link} from '../Link';
import {useAuth} from '../../../contexts';
import {Exit} from '../../../assets/icons';

export const Header = () => {
  const {top} = useSafeAreaInsets();

  const {clearUserToken} = useAuth();

  return (
    <Row bg="background" p={`${top + 16}px 16px 16px`} justify="space-between">
      <Image
        source={require('../../../assets/images/logo.png')}
        width={100}
        height={16}
      />
      <Row gap={24}>
        <Link onPress={() => {}} size="small">
          TROCAR PERFIL
        </Link>
        <Row align="center" justify="center" gap={4}>
          <Link onPress={clearUserToken} size="small">
            SAIR
          </Link>
          <Exit />
        </Row>
      </Row>
    </Row>
  );
};
