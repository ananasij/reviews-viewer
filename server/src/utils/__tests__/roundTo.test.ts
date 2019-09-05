import { roundTo } from '../roundTo';

describe('roundTo', () => {
  describe('default decimals', () => {
    it('should round with 0 decimals by default', () => {
      expect(roundTo(0.2)).toBe(0);
    });
  });

  describe('decimals = 0', () => {
    it('should round down if fraction is less than 0.5', () => {
      expect(roundTo(1.2, 0)).toBe(1);
    });

    it('should round up if fraction equals 0.5', () => {
      expect(roundTo(1.5, 0)).toBe(2);
    });

    it('should round up if fraction is greater than 0.5', () => {
      expect(roundTo(1.7, 0)).toBe(2);
    });
  });

  describe('decimals = 2', () => {
    it('should round down if 3rd decimal is less than 5', () => {
      expect(roundTo(1.234, 2)).toBe(1.23);
    });

    it('should round up if 3rd decimal equals 5', () => {
      expect(roundTo(1.235, 2)).toBe(1.24);
    });

    it('should round up if 3rd decimal is greater than 5', () => {
      expect(roundTo(1.236, 2)).toBe(1.24);
    });
  });
});
