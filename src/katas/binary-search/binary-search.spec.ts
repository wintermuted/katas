import { searchBinarySearch, searchIndexOf } from "./binary-search";

describe('binary-search', () => {
  describe('searchIndexOf', () => {
    test('test 1', () => {  
      // Input: nums = [-1,0,3,5,9,12], target = 9
      // Output: 4
      // Explanation: 9 exists in nums and its index is 4
      expect(searchIndexOf([-1, 0, 3, 5, 9, 12], 9)).toStrictEqual(4)
    });
  
    test('test 2', () => {
      // Input: nums = [-1,0,3,5,9,12], target = 2
      // Output: -1
      // Explanation: 2 does not exist in nums so return -1
  
      expect(searchIndexOf([-1, 0, 3, 5, 9, 12], 2)).toStrictEqual(-1)
    })
  });

  describe('searchBinarySearch', () => {
    test('test 1', () => {  
      // Input: nums = [-1,0,3,5,9,12], target = 9
      // Output: 4
      // Explanation: 9 exists in nums and its index is 4
      expect(searchBinarySearch([-1, 0, 3, 5, 9, 12], 9)).toStrictEqual(4)
    });
  
    test('test 2', () => {
      // Input: nums = [-1,0,3,5,9,12], target = 2
      // Output: -1
      // Explanation: 2 does not exist in nums so return -1
  
      expect(searchBinarySearch([-1, 0, 3, 5, 9, 12], 2)).toStrictEqual(-1)
    })
  });
});