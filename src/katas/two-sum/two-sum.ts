export function twoSum(nums: number[], target: number): number[] {
  let targetIndices: number[] = [];

  nums.forEach((value, firstIndex) => {
      const nextIndex = firstIndex + 1;
      const remainderArray = nums.slice(nextIndex)

        remainderArray.forEach((secondValue, secondIndex) => {
          if (targetIndices.length < 2) {
            const result = value + secondValue;

            if (result === target) {
              targetIndices.push(firstIndex, nextIndex)
            }
        }
      });
  });

  return targetIndices;
};    