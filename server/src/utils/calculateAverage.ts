export function calculateAverage(...numbers: number[]) {
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}
