export type UserType = {
  id: number;
  cpf: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  students: StudentType[];
};

export type StudentType = {
  rm: number;
  classGroup: string;
  period: string;
  firstName: string;
  lastName: string;
  schedule: ScheduleType[];
  reportCard: ReportCardType[];
};

export type ScheduleType = {
  day: string;
  classes: ClassType[];
};

export type ClassType = {
  time: string;
  subject: string;
};

export type ReportCardType = {
  year: string;
  classGroup: string;
  terms: TermType[];
};

export type TermType = {
  term: number;
  subjects: SubjectType[];
};

export type SubjectType = {
  name: string;
  grade: number | null;
  absences: number | null;
};
