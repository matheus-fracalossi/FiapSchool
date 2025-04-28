import { useEffect, useState } from 'react';
import {
  Accordion,
  Background,
  Column,
  Dropdown,
  Text,
} from '../../../core/components';
import { ProfileInfo } from '../Components';
import { FlatList, ScrollView } from 'react-native';
import { useUser } from '../Contexts';
import { ReportCardType } from '../Contexts/types';

export const Grades = () => {
  const { user, student } = useUser();

  const [openedSectionId, setOpenedSectionId] = useState<string | null>(null);
  const [classGradeAccordionId, setClassGradeAccordionId] = useState<
    number | null
  >(null);

  const [studentClass, setStudentClass] = useState<ReportCardType>(
    student.reportCard[0],
  );

  useEffect(() => {
    setStudentClass(student.reportCard[0]);
    clearOpenedSectionId();
    clearClassGradeAccordionId();
  }, [student]);

  const clearOpenedSectionId = () => setOpenedSectionId(null);
  const clearClassGradeAccordionId = () => setClassGradeAccordionId(null);

  const handleSetStudentClass = (reportCard: ReportCardType) => {
    setStudentClass(reportCard);
    clearOpenedSectionId();
  };

  const handlePressSection = (id: string) => {
    if (id === openedSectionId) {
      return clearOpenedSectionId();
    }
    setOpenedSectionId(id);
    clearClassGradeAccordionId();
  };

  const handleClassGradeAccordionId = (id: number) => {
    if (id === classGradeAccordionId) {
      return clearClassGradeAccordionId();
    }
    setClassGradeAccordionId(id);
  };

  return (
    <Background p="16px 24px 32px">
      <ScrollView
        bounces={false}
        scrollEnabled={openedSectionId !== 'dropdown'}
        showsVerticalScrollIndicator={false}>
        <Column gap={64}>
          <ProfileInfo userName={user.firstName} student={student} />
          <Text size="medium" weight="bold" color="cta" textAlign="center">
            REPORT CARD
          </Text>
          <Dropdown
            options={student.reportCard}
            opened={openedSectionId === 'dropdown'}
            onPress={() => handlePressSection('dropdown')}
            value={studentClass}
            renderTitle={classInfo => `${classInfo.classGroup} - ${classInfo.year}`}
            onValueSelect={handleSetStudentClass}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            data={studentClass.terms}
            contentContainerStyle={{ gap: 16 }}
            bounces={false}
            renderItem={({ item, index }) => (
              <Accordion
                opened={openedSectionId === `accordion-${index}`}
                onPress={() => handlePressSection(`accordion-${index}`)}
                title={`${item.term}º TERM`}>
                <Column gap={16}>
                  {item.subjects.map((subject, subjectIndex) => (
                    <Accordion.ItemSecondary
                      key={subject.name}
                      opened={classGradeAccordionId === subjectIndex}
                      title={subject.name}
                      onPress={() => handleClassGradeAccordionId(subjectIndex)}>
                      <Text size="small">Grade: {subject.grade ?? '-'}</Text>
                      <Text size="small">Absences: {subject.absences ?? '-'}</Text>
                    </Accordion.ItemSecondary>
                  ))}
                </Column>
              </Accordion>
            )}
          />
        </Column>
      </ScrollView>
    </Background>
  );
};
