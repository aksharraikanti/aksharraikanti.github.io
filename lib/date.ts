const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatMonthYear(value: string | null): string {
  if (!value) return 'Present';
  const [year, month] = value.split('-').map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatDateRange(start: string, end: string | null): string {
  return `${formatMonthYear(start)} – ${formatMonthYear(end)}`;
}
