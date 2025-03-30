export const cpfMask = (value: string) => {
  return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};

export const unmaskCpf = (cpf: string): string => {
  return cpf.replace(/\D/g, '');
};
