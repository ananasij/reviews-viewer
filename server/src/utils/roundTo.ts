export const roundTo = (number: number, decimals = 0): number =>
  parseFloat(number.toFixed(decimals));
