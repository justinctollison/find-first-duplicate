function findFirstDuplicate(arr) {
  // type your code here

  let min = -1;

  let set = new Set();

  for (let i = arr.length - 1; i >= 0; i--) {
    if (set.has(arr[i]))
      min = i;
    else
      set.add(arr[i]);
  }

  if (min != -1)
    return arr[min]
  
  else
    return -1


}

if (require.main === module) {
  // add your own tests in here
  console.log(findFirstDuplicate([2, 3, 4, 3, 5,]));

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
// 
//create a new variable thats empty
//iterate over first array in a nested for loop, the first loop checks if there are any duplicated values,
//the second for loop adds the duplicated values into the new array set
//
