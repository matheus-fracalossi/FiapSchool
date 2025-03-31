import {ProfileInfoProps} from './types';
import {Column, Text} from '../../../core/components';

export const ProfileInfo = ({userName, student}: ProfileInfoProps) => {
  return (
    <Column align="center" gap={32}>
      <Text size="large">
        Olá,{' '}
        <Text size="large" weight="bold">
          {userName.toLocaleUpperCase()}
        </Text>
      </Text>

      <Column align="center">
        <Text size="medium" weight="medium">
          {student.primeiroNome.toLocaleUpperCase()}{' '}
          {student.sobrenome.toLocaleUpperCase()}
        </Text>
        <Text size="medium">
          {student.turma} - RM {student.rm} - {student.periodo}
        </Text>
      </Column>
    </Column>
  );
};
