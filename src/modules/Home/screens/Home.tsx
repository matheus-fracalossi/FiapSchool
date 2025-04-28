import { useEffect, useState } from 'react';
import {
  Background,
  Column,
  Dropdown,
  Image,
  Row,
  Text,
} from '../../../core/components';
import { formatDate } from '../../../core/utils';
import { FlatList, ScrollView } from 'react-native';
import { ProfileInfo } from '../Components';
import { useUser } from '../Contexts';
import { ScheduleType } from '../Contexts/types';

export const Home = () => {
  const { user, student } = useUser();

  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const [date, setDate] = useState<ScheduleType | null>(null);

  useEffect(() => {
    setDropdownOpened(false);
    setDate(null);
  }, [student]);

  const handleToggleDropdown = () => setDropdownOpened(prev => !prev);

  const handleSelectDate = (dateParam: ScheduleType) => {
    setDate(dateParam);
    setDropdownOpened(false);
  };

  return (
    <Background p="16px 24px 32px">
      <ScrollView
        bounces={false}
        scrollEnabled={!isDropdownOpened}
        showsVerticalScrollIndicator={false}>
        <Column gap={64}>
          <ProfileInfo userName={user.firstName} student={student} />
          <Column gap={32}>
            <Text size="medium" weight="bold" color="cta" textAlign="center">
              SCHEDULE
            </Text>
            <Dropdown
              placeholder="Select a date"
              options={student.schedule}
              opened={isDropdownOpened}
              onPress={handleToggleDropdown}
              value={date}
              renderTitle={schedule => formatDate(schedule.day) ?? ''}
              onValueSelect={handleSelectDate}
            />
            <FlatList
              scrollEnabled={false}
              data={date?.classes}
              contentContainerStyle={{ gap: 16 }}
              bounces={false}
              renderItem={({ item }) => (
                <Row gap={8}>
                  <Text>⚬</Text>
                  <Column gap={4}>
                    <Text size="small">{item.time}</Text>
                    <Text weight="bold">{item.subject}</Text>
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
                  <Text size="medium">No classes on this day</Text>
                </Column>
              }
            />
          </Column>
        </Column>
      </ScrollView>
    </Background>
  );
};
