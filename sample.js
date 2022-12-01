// You are given a 0-indexed integer array nums.

// Swaps of adjacent elements are able to be performed on nums.

// A valid array meets the following conditions:

// The largest element (any of the largest elements if there are multiple) is at the rightmost position in the array.
// The smallest element (any of the smallest elements if there are multiple) is at the leftmost position in the array.
// Return the minimum swaps required to make nums a valid array.

const minimumSwaps = (nums) => {
    let smallIndex = 0;
    let largeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums[largeIndex]) {
            largeIndex = i;
        } else if (nums[i] < nums[smallIndex]) {
            smallIndex = i;
        }
    }
    
    const distance = smallIndex + nums.length - 1 - largeIndex;
    
    if (smallIndex > largeIndex) {
        return distance - 1;
    }
    
    return distance;
}

console.log(minimumSwaps([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


