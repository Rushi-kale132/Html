// Get the input element and the output element
const input = document.getElementById("arrayInput");
const output = document.getElementById("output");
// bubble sort
function sortArray() {
 const arr = input.value.split(",");
 for (let i = 0; i < arr.length - 1; i++) {
   for (let j = i + 1; j < arr.length; j++) {
     if (arr[i] > arr[j]) {
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
     }
   }
 }
 displayArray(arr);
}
// liner search
function searchArray() {
 const arr = input.value.split(",");
 const searchValue = prompt("Enter a value to search for:");
 let found = false;
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === searchValue) {
     found = true;
     break;
   }
 }
 if (found) {
   alert(`${searchValue} found in array!`);
 } else {
   alert(`${searchValue} not found in array!`);
 }
}


// reversing
function reverseArray() {
 const arr = input.value.split(",");
 const reversedArray = [];
 for (let i = arr.length - 1; i >= 0; i--) {
   reversedArray.push(arr[i]);
 }
 displayArray(reversedArray);
}


// output
function displayArray(arr) {
 output.innerHTML = "";
 for (let i = 0; i < arr.length; i++) {
   const li = document.createElement("li");
   li.innerText = arr[i];
   output.appendChild(li);
 }
}
