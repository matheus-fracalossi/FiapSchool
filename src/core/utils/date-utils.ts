export const formatDate = (dateString: string): string | null => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return null;
  }

  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
  });

  const weekday = date.toLocaleDateString('pt-BR', {weekday: 'long'});

  return `${formattedDate}, ${weekday}`;
};
