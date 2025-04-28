import { ProfileInfoProps } from './types';
import { Column, Text } from '../../../core/components';

export const ProfileInfo = ({ userName, student }: ProfileInfoProps) => {
  return (
    <Column align="center" gap={32}>
      <Text size="large">
        Hello,{' '}
        <Text size="large" weight="bold">
          {userName.toLocaleUpperCase()}
        </Text>
      </Text>

      <Column align="center">
        <Text size="medium" weight="medium">
          {student.firstName.toLocaleUpperCase()}{' '}
          {student.lastName.toLocaleUpperCase()}
        </Text>
        <Text size="medium">
          {student.classGroup} - RM {student.rm} - {student.period}
        </Text>
      </Column>
    </Column>
  );
};
