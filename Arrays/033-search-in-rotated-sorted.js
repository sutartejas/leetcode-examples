function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid;
      }

      // Check if the left side is sorted
      if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target < nums[mid]) {
              // target is in the left
              right = mid - 1;
          } else {
              // target is in the right
              left = mid + 1;
          }
      } else {
          // Otherwise, the right side is sorted
          if (nums[mid] < target && target <= nums[right]) {
              // target is in the right
              left = mid + 1;
          } else {
              // target is in the left
              right = mid - 1;
          }
      }
  }

  return -1;
}

const result = binarySearch([4, 5, 6, 7, 0, 1, 2], 0);
console.log(result); // Output should be 4
