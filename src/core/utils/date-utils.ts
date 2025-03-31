const localeDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
  date.toLocaleDateString('pt-BR', options);

export const formatDate = (dateString: string): string | null => {
  const date = new Date(dateString + 'T00:00:00');

  if (isNaN(date.getTime())) {
    return null;
  }

  const formattedDate = localeDate(date, {
    day: 'numeric',
    month: 'long',
    timeZone: 'America/Sao_Paulo',
  });

  const weekday = localeDate(date, {weekday: 'long'});

  return `${formattedDate}, ${weekday}`;
};
