import { calculateAverage } from '../calculateAverage';

describe('calculateAverage', () => {
  it('should return 2 when passed 0, 2, 4', () => {
    expect(calculateAverage(0, 2, 4)).toBe(2);
  });

  it('should return -1 when passed -4, 0, 0', () => {
    expect(calculateAverage(-4, 0, 0, 0)).toBe(-1);
  });
});
