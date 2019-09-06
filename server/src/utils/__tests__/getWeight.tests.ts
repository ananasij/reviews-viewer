import { getWeightByYear } from '../getWeight';

describe('getWeightByYear', () => {
  it('should return number', () => {
    expect(getWeightByYear(2010, 2019)).not.toBe(NaN);
  });

  it('should return 0.5 for difference > 5 years', () => {
    expect(getWeightByYear(2000, 2019)).toBe(0.5);
  });

  it('should return 1 - (current_year - year_of_review)*0.1', () => {
    expect(getWeightByYear(2017, 2019)).toBe(0.8);
  });

  it('should return 0 for missing years', () => {
    expect(getWeightByYear(2020, null)).toBe(0);
  });

  it('should return 0 if year of review is bigger than current', () => {
    expect(getWeightByYear(2020, 2019)).toBe(0);
  });
});
