/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for(let i = 0 ; i < nums2.length ; i++){
        nums1.push(nums2[i]);
    }
    
    nums1 = nums1.sort((a,b) => a-b);
    
    let n = nums1.length;
    if (n === 0) return 0;

    if(nums1.length%2 == 0){
        let n1 = nums1[(n/2)-1];
        let n2 = nums1[n/2];

        return (n1+n2)/2;
    }
    else{
        return nums1[Math.floor(n/2)];
    }
};