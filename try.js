const nums = [3, 2, 4];
const target = 7;

const sum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    for (let j = 1; j < nums.length; j++) {
      const second = nums[j];
      if (first + second === target) {
        return [i, j];
      }
    }
  }
};

console.log(sum(nums, target));
