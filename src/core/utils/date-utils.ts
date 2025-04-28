const localeDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
  date.toLocaleDateString('en-US', options);

export const formatDate = (dateString: string): string | null => {
  const date = new Date(dateString + 'T00:00:00');

  if (isNaN(date.getTime())) {
    return null;
  }

  const formattedDate = localeDate(date, {
    day: 'numeric',
    month: 'long',
  });

  const weekday = localeDate(date, { weekday: 'long' });

  return `${formattedDate}, ${weekday}`;
};
