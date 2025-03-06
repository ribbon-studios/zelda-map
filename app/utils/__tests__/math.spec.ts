import { describe, it, expect } from 'vitest';
import { clamp } from '../math';

describe('utils(Math)', () => {
  describe('fn(clamp)', () => {
    it('should leave valid values alone', () => {
      expect(clamp(3, 2, 5)).toEqual(3);
    });

    it('should force values in the min range', () => {
      expect(clamp(1, 2, 5)).toEqual(2);
    });

    it('should force values in the max range', () => {
      expect(clamp(6, 2, 5)).toEqual(5);
    });
  });
});
