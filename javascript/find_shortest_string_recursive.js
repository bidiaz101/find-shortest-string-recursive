function findShortestStringRecursive(arr) {
  // type your code here
  if(arr.length === 1) return arr[0]

  const longer = arr[0].length > arr[1].length ? arr[0] : arr[1]
  const index = arr.indexOf(longer)

  arr.splice(index, 1)

  return findShortestStringRecursive(arr)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("Expecting: 'May'");
  console.log("=>", findShortestStringRecursive(['January', "February", "March", "April", "May", "June"]))

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("Expecting: 'Sunday'");
  console.log(findShortestStringRecursive(["Sunday", "Monday", "Tuesday", "wednesday", "thursday", "friday", "Saturday"]))

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file

// if the array has one element, return that element
// Take first two elements of the array and compare the two
// assign the longer one to a variable
// find index of the longer element
// remove the longer element from the array using the index
// return the value of the function call with the altered array

// And a written explanation of your solution
