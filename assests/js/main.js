/** 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let nums = [2, 7, 11, 15];
let target = 9;
let i, j;
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];

      if (target === sum) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum(nums, target));
