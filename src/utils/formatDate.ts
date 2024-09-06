import {Dayjs} from 'dayjs';

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

export const formatNoticeDate = (dateString: string) => {
  const date = new Date(dateString);

  // 년, 월, 일을 추출하여 두 자리로 포맷팅
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');

  // "YYYY-MM-DD" 형식으로 변환
  return `${year}-${month}-${day}`;
};

export const generateMonthDates = (date: Dayjs): (Dayjs | null)[] => {
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');

  const dates: (Dayjs | null)[] = [];
  let current = startOfMonth;

  while (current.isBefore(endOfMonth) || current.isSame(endOfMonth)) {
    dates.push(current);
    current = current.add(1, 'day');
  }

  const leadingEmptyDays = Array.from({length: startOfMonth.day()}, () => null);
  const trailingEmptyDays = Array.from(
    {length: 6 - endOfMonth.day()},
    () => null,
  );

  return [...leadingEmptyDays, ...dates, ...trailingEmptyDays];
};
