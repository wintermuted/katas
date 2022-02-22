export function searchIndexOf(nums: number[], target: number): number {
  return nums.indexOf(target);
};


export function searchBinarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let centerIndex = Math.floor(left + (right - left) / 2);
    let currentValue = nums[centerIndex];

    if (currentValue === target) {
      return centerIndex;
    } else if (target < currentValue) {
      right = centerIndex - 1;
    } else {
      left = centerIndex + 1;
    }
  }
  
  return -1;
};