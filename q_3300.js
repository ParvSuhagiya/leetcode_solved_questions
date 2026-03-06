/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        // let temp = nums[i];
        let temp = Math.abs(nums[i]);
        let digit;
        let sum = 0;
        while(temp > 0){
            let v = temp % 10;
            sum += v;
            temp =Math.floor(temp/10);
        }
        nums[i]=sum;
    }
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min){
            min = nums[i];
        }
    }
    return min;
};