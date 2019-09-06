export const getWeightByYear = (year: number, currentYear: number): number => {
  if (!year || !currentYear || year > currentYear) {
    return 0;
  }

  return currentYear - year > 5 ? 0.5 : 1 - (currentYear - year) * 0.1;
};
