import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image, Row} from '../../atoms';
import {Link} from '../Link';
import {Exit} from '../../../assets/icons';
import {HeaderProps} from './types';
import {useUser} from '../../../../modules/Home/Contexts';

export const Header = ({onPress}: HeaderProps) => {
  const {top} = useSafeAreaInsets();
  const {openModal, user} = useUser();

  return (
    <Row bg="background" p={`${top + 16}px 16px 16px`} justify="space-between">
      <Image
        source={require('../../../assets/images/logo.png')}
        width={100}
        height={16}
      />
      <Row gap={24}>
        {user.alunos.length && (
          <Link onPress={openModal} size="small">
            TROCAR PERFIL
          </Link>
        )}
        <Row align="center" justify="center" gap={4}>
          <Link onPress={onPress} size="small" textAlign="center">
            SAIR <Exit />
          </Link>
        </Row>
      </Row>
    </Row>
  );
};
