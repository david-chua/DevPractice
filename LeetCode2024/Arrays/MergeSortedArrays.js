/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 *
 */
var merge = function(nums1, m, nums2, n) {
    last = m + n -1;

    // merge in reverse order
    while (m > 0 && n > 0){
        if (nums1[m-1] > nums2[n-1]){
            nums1[last] = nums1[m-1]
            m--
        } else { 
            nums1[last] = nums2[n-1]
            n--
        }
        last--
    }
    // fill nums1 with left over elements
    while (n > 0){
        nums1[last] = nums2[n-1]
        n--;
        last--;
    }
};



/**
 * 
 * Solution Explanation
 * nums1 = [m1,m2,m3,0,0,0]
 * nums2 = [n1,n2,n3]
 * There is always enough space for m + n values in nums1 array. 
 * Solution will be to go backwards from the last value of nums1 and store the greater value between the last real number position in nums1 and nums2. 
 * Once a value has been stored, decrement either m or n so you don't reuse a digit j
 * Also decrement the last position so you odn't overwrite the greatest value. 
 * 
 * 
 * In cases where nums1 values has been used up, you wil just need to go from the last position and increment down as you input the nums 2 position and fill the blank positions in the nums1 array. 
 * 
 * 1
 */