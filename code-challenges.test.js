// ASSESSMENT 3: Coding Practical Questions with Jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", ()=> {
  it("Returns the length of the Fibonacci Squence of given number", ()=> {
      const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
      const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// -->  FAIL  ./code-challenges.test.js
//   fibonacci
//   ✕ Returns the length of the Fibonacci Squence of given number (2 ms)
// ● fibonacci › Returns the length of the Fibonacci Squence of given number
//   ReferenceError: fibonacci is not defined

// b) Create the function that makes the test pass.

//------------Psuedo Code----------
// create a function called fibonacci with "num" for our parameter (argument for this function will be a number)
// create an empty new array. Call it "output"
// create a variable called "num1" and "num2" and "num3"
// create a for loop that starting at i =0 and iterating by 1 until the i is less than the num (argument) -1
// within the for loop are you are to set the num1 and num2 equal to num3
// then set num1 = num2
// then set num2 = num3
// finally push num3 into our output array
// return output (which should be the fibonacci sequence at the length of the number taken as the argument)
const fibonacci = (num) => {
  var output = [1]
  var num1 = 0
  var num2 = 1
    for(let i = 0; i < num -1; i++){
      var num3 = num1 + num2
      num1 = num2
      num2 = num3
      output.push(num3)
    }
  return output
}
console.log(fibonacci(6))
//--> Passing result after creating function-->
// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ Returns the length of the Fibonacci Squence of given number (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("sorted", ()=> {
  it("returns the given objec array sorted from least to greatest", ()=> {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]

    expect(sorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// --> Failed test case without function-->
// FAIL  ./code-challenges.test.js
// sorted
//   ✕ returns the given objec array sorted from least to greatest
// ● sorted › returns the given objec array sorted from least to greatest
//   ReferenceError: sorted is not defined

// b) Create the function that makes the test pass.
//--------------Pseudo Code--------------
//Create a function called sorted that takes in an object
// create a new variable "sortedArray" and make it equal to the object.values(object)
// ..... which turns the object into an array
// call the built in method ".sort" on our new array to make the values sit from smallest to largest
// return that new sorted array
const sorted = (object) => {
  const sortedArray = Object.values(object)
  return sortedArray.sort((a,b)=>(a-b))
}
//--> Passed test case with function-->
// PASS  ./code-challenges.test.js
// sorted
//   ✓ returns the given objec array sorted from least to greatest (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("arraySum",()=> {
  it("Return an array of the accumulating sum of the array", ()=> {
        const accountTransactions1 = [100, -17, -23, -9]
        // Expected output: [100, 83, 60, 51]
        const accountTransactions2 = [250, -89, 100, -96]
        // Expected output: [250, 161, 261, 165]
        const accountTransactions3 = []
        // Expected output: []
    expect(arraySum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arraySum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arraySum(accountTransactions3)).toEqual([])
  })
})
//--> Test cased failed due to undefined function--> 
// FAIL  ./code-challenges.test.js
// arraySum
//   ✕ Return an array of the accumulating sum of the array (2 ms)
// ● arraySum › Return an array of the accumulating sum of the array
//   ReferenceError: arraySum is not defined


// b) Create the function that makes the test pass.
//-------------Pseuso Code------------
// create a function called arraySum that takes in an array as an arguement
//  create an empty array call sumArray
// create a var called prev (refering to the previous value)
// use the higher order function ".map" on the inputed array with only the parameter "value"
// make value equal to prev plus the value (value = prev + value) 
// make prev equal to value (prev = value)
// return the value 
const arraySum = (array) => {
    const sumArray = []
    var prev = 0
  return array.map((value)=> {
    value = prev + value
    prev = value
    return value
  })
}
//-->Test case passed with created function-->
// PASS  ./code-challenges.test.js
// arraySum
//   ✓ Return an array of the accumulating sum of the array (5 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// -------------ALL TEST CASES----------

//--> ALL TEST CASES PASSED IN ONE RUN-->
// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ Returns the length of the Fibonacci Squence of given number (5 ms)
// sorted
//   ✓ returns the given objec array sorted from least to greatest (1 ms)
// arraySum
//   ✓ Return an array of the accumulating sum of the array (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
