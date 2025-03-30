export type UserType = {
  id: number;
  cpf: string;
  email: string;
  senha: string;
  primeiroNome: string;
  sobrenome: string;
  alunos: AlunoType[];
  boletim: BoletimType[];
};

export type AlunoType = {
  rm: number;
  turma: string;
  periodo: string;
  primeiroNome: string;
  sobrenome: string;
  agenda: AgendaType[];
  boletim: BoletimType[];
};

export type AgendaType = {
  dia: string;
  aulas: AulaType[];
};

export type AulaType = {
  horario: string;
  disciplina: string;
};

export type BoletimType = {
  ano: string;
  turma: string;
  trimestres: TrimestreType[];
};

export type TrimestreType = {
  trimestre: number;
  disciplinas: DisciplinaType[];
};

export type DisciplinaType = {
  nome: string;
  nota: number | null;
  faltas: number | null;
};
