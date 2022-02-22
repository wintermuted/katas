export function twoSumDoubleLoopSolution(nums: number[], target: number): number[] {
  let targetIndices: number[] = [];

  nums.forEach((value, firstIndex) => {
      const nextIndex = firstIndex + 1
      const remainderArray = nums.slice(nextIndex)

        remainderArray.forEach((secondValue, secondIndex) => {
          if (targetIndices.length < 2) {
            const result = value + secondValue

            if (result === target) {
              targetIndices.push(firstIndex, nextIndex + secondIndex)
            }
          }
        });
  });

  return targetIndices;
};    

export function twoSumSingleLoopSolution(nums: number[], target: number): number[] {
  const targetIndices: number[] = [];

  nums.forEach((value, index) => {
    if (targetIndices.length < 2) {
      const remainder = target - value;
      const sliced = nums.slice(index + 1)
      const itemIndex = sliced.findIndex((n) => n === remainder);

      if (itemIndex !== -1) {
        const adjustedIndex = itemIndex + index + 1;
        targetIndices.push(index, adjustedIndex)   
      }
    }
  });

  return targetIndices;
}

export function twoSumHashTableSolution(nums: number[], target: number): number[] {
  const targetIndices: number[] = [];
  const hashMap: { [index: string]: string} = {};

  nums.forEach((value, index) => hashMap[`${index}`] = `${value}`);

  nums.forEach((value, index) => {
    let complement: number;

    if (targetIndices.length < 2) {
      complement = target - nums[index];

      const indexOfComplement = Object.keys(hashMap).find(key => {
        return parseInt(key) !== index && parseInt(hashMap[key]) === complement;
      });
    
      if (!!indexOfComplement) {
        targetIndices.push(index, parseInt(indexOfComplement))
      }  
    }
  });

  return targetIndices;
}

export function twoSumMapSolution(nums: number[], target: number): number[] {
  let map = new Map();
  const targetIndices: number[] = [];

  nums.forEach((value, index) => {
    const remainder = target - value;

    if (map.has(remainder)) {
      targetIndices.push(map.get(remainder), index);
    }

    map.set(value, index) 
  });

  return targetIndices;
}
