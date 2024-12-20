//12/11/2024

function twoSum(nums: number[], target: number): number[] {
  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];
    const complemento = target - value;
    const indexComplemento = nums.indexOf(complemento);
    if (indexComplemento >= 0 && indexComplemento != index) {
      return [index, indexComplemento];
    }
  }
  return [];
}
