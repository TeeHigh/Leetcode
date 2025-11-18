/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) return [-1, -1];

    let left = 0;
    let right = nums.length - 1;

    while (left <= right){
        const mid = Math.floor((left + right)/2);

        if(nums[mid] > target){
            right = mid - 1;
        }
        else if(nums[mid] < target){
            left = mid + 1;
        }
        else{
            left = mid;
            right = mid;

            while(nums[left - 1] == nums[left]) left--;
            while(nums[right + 1] == nums[right]) right++;

            return [left, right];
        }    
    }
    return [-1, -1]
};