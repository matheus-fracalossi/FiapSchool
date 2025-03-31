import {useState} from 'react';
import {
  Accordion,
  Background,
  Column,
  Dropdown,
  Text,
} from '../../../core/components';
import {ProfileInfo} from '../Components';
import {useUser} from '../Contexts';
import {BoletimType} from '../Contexts/types';
import {FlatList, ScrollView} from 'react-native';

export const Grades = () => {
  const {user, student} = useUser();

  const [openedScctionId, setOpenedSectionId] = useState<string | null>(null);
  const [classGradeAccordionId, setClassGradeAccordionId] = useState<
    number | null
  >(null);

  const [studentClass, setStudentClass] = useState<BoletimType>(
    student.boletim[0],
  );

  const clearOpenedSecctionId = () => setOpenedSectionId(null);
  const clearClassGradeAccordionId = () => setClassGradeAccordionId(null);

  const handdleSetStudentClass = (boletim: BoletimType) => {
    setStudentClass(boletim);
    clearOpenedSecctionId();
  };

  const handlePressSection = (id: string) => {
    if (id === openedScctionId) {
      return clearOpenedSecctionId();
    }
    setOpenedSectionId(id);
    clearClassGradeAccordionId();
  };

  const handleclassGradeAccordionId = (id: number) => {
    if (id === classGradeAccordionId) {
      return clearClassGradeAccordionId();
    }
    setClassGradeAccordionId(id);
  };

  return (
    <Background p="16px 24px 32px">
      <ScrollView
        bounces={false}
        scrollEnabled={openedScctionId !== 'dropdown'}
        showsVerticalScrollIndicator={false}>
        <Column gap={64}>
          <ProfileInfo userName={user.primeiroNome} student={student} />
          <Text size="medium" weight="bold" color="cta" textAlign="center">
            BOLETIM
          </Text>
          <Dropdown
            options={student.boletim}
            opened={openedScctionId === 'dropdown'}
            onPress={() => handlePressSection('dropdown')}
            value={studentClass}
            renderTitle={classInfo => `${classInfo.turma} - ${classInfo.ano}`}
            onValueSelect={handdleSetStudentClass}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            data={studentClass.trimestres}
            contentContainerStyle={{gap: 16}}
            bounces={false}
            renderItem={({item, index}) => (
              <Accordion
                opened={openedScctionId === `accordion-${index}`}
                onPress={() => handlePressSection(`accordion-${index}`)}
                title={`${item.trimestre}º TRIMESTRE`}>
                <Column gap={16}>
                  {item.disciplinas.map((disciplina, disciplinaIndex) => (
                    <Accordion.ItemSecondary
                      key={disciplina.nome}
                      opened={classGradeAccordionId === disciplinaIndex}
                      title={disciplina.nome}
                      onPress={() =>
                        handleclassGradeAccordionId(disciplinaIndex)
                      }>
                      <Text size="small">Nota: {disciplina.nota}</Text>
                      <Text size="small">Faltas: {disciplina.faltas}</Text>
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
