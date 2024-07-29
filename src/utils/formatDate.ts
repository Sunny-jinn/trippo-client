export const formatDate = (dateString: Date | null): string => {
  if (!dateString) {
    dateString = new Date();
  }
  const date = new Date(dateString);

  // 날짜 형식을 '02 July 2024'로 포맷팅
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(date);
};
