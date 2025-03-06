import { describe, it, expect } from 'vitest';
import { explodeCoord, explodeCoordPair, explodeCoordPairs } from '../screens';

describe('utils(Screens)', () => {
  describe('func(explodeCoord)', () => {
    it('should support ordinary coordinates', () => {
      expect(explodeCoord('0')).toEqual(['0']);
    });

    it('should explode ranges', () => {
      expect(explodeCoord('0-2')).toEqual(['0', '1', '2']);
    });
  });

  describe('func(explodeCoordPair)', () => {
    it('should support ordinary coordinates', () => {
      expect(explodeCoordPair('0,0')).toEqual(['0,0']);
    });

    it('should explode ranges', () => {
      expect(explodeCoordPair('0-2,0')).toEqual(['0,0', '1,0', '2,0']);
    });
  });

  describe('func(explodeCoordPairs)', () => {
    it('should support ordinary coordinates', () => {
      expect(explodeCoordPairs('0,0', '1,1')).toEqual(['0,0', '1,1']);
    });

    it('should explode ranges', () => {
      expect(explodeCoordPairs('0-2,0', '1,1')).toEqual(['0,0', '1,0', '2,0', '1,1']);
    });
  });
});
