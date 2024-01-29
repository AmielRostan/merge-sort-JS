// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  const half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);

  // Recursively sort the left half
  mergeSort(left);
  // Recursively sort the right half
  mergeSort(right);
  // Merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const sorted = [];
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while(arrA.length > indexA && arrB.length > indexB) {
    // Compare the first values of each array
    if(arrA[indexA] > arrB[indexB]) {
      sorted.push(arrB[indexB]);
      indexB++;
    } else {
      sorted.push(arrA[indexA]);
      indexA++;
    }
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  }

  while (indexA < arrA.length) {
    sorted.push(arrA[indexA]);
    indexA++;
  }

  while (indexB < arrB.length) {
    sorted.push(arrB[indexB]);
    indexB++;
  }

  // Return the return array
  return sorted;

}

module.exports = [merge, mergeSort];
