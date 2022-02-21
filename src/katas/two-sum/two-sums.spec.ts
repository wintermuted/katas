import { twoSumSingleLoopSolution, twoSumDoubleLoopSolution, twoSumHashTableSolution } from './two-sum';

describe('twoSum', () => {
  describe('twoSum - double loop', () => {
    test('test 1 - array beginning', () => {
      expect(twoSumDoubleLoopSolution([2,7,11,15], 9)).toStrictEqual([0,1])
    });
  
    test('test 2 - array end', () => {
      expect(twoSumDoubleLoopSolution([3,2,4], 6)).toStrictEqual([1,2])
    });
  
    test('test 3 - only two options', () => {
      expect(twoSumDoubleLoopSolution([3,3], 6)).toStrictEqual([0,1])
    });
  
    test('test 4 - disconnected indices', () => {
      expect(twoSumDoubleLoopSolution([3,2,3], 6)).toStrictEqual([0, 2])
    });
  })
  
  describe('twoSum - single loop', () => {
    test('test 1 - array beginning', () => {
      expect(twoSumSingleLoopSolution([2,7,11,15], 9)).toStrictEqual([0,1])
    });
  
    test('test 2 - array end', () => {
      expect(twoSumSingleLoopSolution([3,2,4], 6)).toStrictEqual([1,2])
    });
  
    test('test 3 - only two options', () => {
      expect(twoSumSingleLoopSolution([3,3], 6)).toStrictEqual([0,1])
    });
  
    test('test 4 - disconnected indices', () => {
      expect(twoSumSingleLoopSolution([3,2,3], 6)).toStrictEqual([0, 2])
    });
  })

  describe('twoSum - hash map', () => {
    test('test 1 - array beginning', () => {
      expect(twoSumHashTableSolution([2,7,11,15], 9)).toStrictEqual([0,1])
    });
  
    test('test 2 - array end', () => {
      expect(twoSumHashTableSolution([3,2,4], 6)).toStrictEqual([1,2])
    });
  
    test('test 3 - only two options', () => {
      expect(twoSumHashTableSolution([3,3], 6)).toStrictEqual([0,1])
    });
  
    test('test 4 - disconnected indices', () => {
      expect(twoSumHashTableSolution([3,2,3], 6)).toStrictEqual([0, 2])
    });
  });
})
