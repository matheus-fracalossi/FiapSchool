import {useState} from 'react';
import {Background, Column, Dropdown, Text} from '../../../core/components';
import {useUser} from '../Contexts';
import {AgendaType} from '../Contexts/types';
import {formatDate} from '../../../core/utils';

export const Home = () => {
  const {user, student} = useUser();

  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const [date, setDate] = useState<AgendaType | null>(null);

  const handleToggleDropdown = () => setDropdownOpened(prev => !prev);

  return (
    <Background p="16px 24px 0px" gap={64}>
      <Column align="center" gap={32}>
        <Text size="large">
          Olá,{' '}
          <Text size="large" weight="bold">
            {user.primeiroNome.toLocaleUpperCase()}
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
      <Column gap={32}>
        <Text size="medium" weight="bold" color="cta" textAlign="center">
          AGENDA
        </Text>
        <Dropdown
          placeholder="Selecione uma data"
          options={student.agenda}
          opened={isDropdownOpened}
          onPress={handleToggleDropdown}
          value={date}
          renderValue={agenda => formatDate(agenda.dia) ?? ''}
          onValueSelect={setDate}
        />
      </Column>
    </Background>
  );
};
