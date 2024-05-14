// Reversing an Array
const reverseArray = (arr) => {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  };
  
  // Sorting an Array
  const sortArray = (arr) => {
    return arr.sort((a, b) => a - b);
  };
  
  // Searching an Array
  const searchArray = (arr, num) => {
    return arr.indexOf(num);
  };
  
  // Testing the Functions
  let arr = [5, 2, 8, 1, 4];
  console.log(reverseArray(arr)); // [4, 1, 8, 2, 5]
  console.log(sortArray(arr)); // [1, 2, 4, 5, 8]
  console.log(searchArray(arr, 2)); // 1
  
