import {useState} from 'react';
import {
  Background,
  Column,
  Dropdown,
  Image,
  Row,
  Text,
} from '../../../core/components';
import {useUser} from '../Contexts';
import {AgendaType} from '../Contexts/types';
import {formatDate} from '../../../core/utils';
import {FlatList, ScrollView} from 'react-native';
import {ProfileInfo} from '../Components';

export const Home = () => {
  const {user, student} = useUser();

  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const [date, setDate] = useState<AgendaType | null>(null);

  const handleToggleDropdown = () => setDropdownOpened(prev => !prev);

  const handleSelectDate = (date: AgendaType) => {
    setDate(date);
    setDropdownOpened(false);
  };

  return (
    <Background p="16px 24px 32px">
      <ScrollView
        bounces={false}
        scrollEnabled={!isDropdownOpened}
        showsVerticalScrollIndicator={false}>
        <Column gap={64}>
          <ProfileInfo userName={user.primeiroNome} student={student} />
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
              renderTitle={agenda => formatDate(agenda.dia) ?? ''}
              onValueSelect={handleSelectDate}
            />
            <FlatList
              data={date?.aulas}
              contentContainerStyle={{gap: 16}}
              bounces={false}
              renderItem={({item}) => (
                <Row gap={8}>
                  <Text>⚬</Text>
                  <Column gap={4}>
                    <Text size="small">{item.horario}</Text>
                    <Text weight="bold">{item.disciplina}</Text>
                  </Column>
                </Row>
              )}
              ListEmptyComponent={
                <Column align="center" gap={16}>
                  <Image
                    source={require('../../../core/assets/images/empty-state.png')}
                    width="100%"
                    height={208}
                    resizeMode="contain"
                  />
                  <Text size="medium">Sem aulas neste dia</Text>
                </Column>
              }
            />
          </Column>
        </Column>
      </ScrollView>
    </Background>
  );
};
