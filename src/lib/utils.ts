import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string, year?: string) => {
  console.log('📆 incoming date', date);
  const dateToConvert = new Date(date);
  console.log('📅 Date', dateToConvert);
  const convert = Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: year ? 'numeric' : undefined,
  }).format(dateToConvert);
  return convert;
};

export const formatRating = (rating: number) => {
  return Math.floor(rating * 10) / 10;
};
