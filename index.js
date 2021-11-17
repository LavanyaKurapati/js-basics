
//-------- Problem1 -------------

// TODO destructure the array so that 2 variables apple and peach hold values at indexes 0 and 2 in the array
const numbersArray = ['apple','orange', 'peach'];

const [apple, orange, peach] = numbersArray;
console.log(apple)
console.log(orange)
console.log(peach)


// TODO destructure the object to extract name and age of the person 
const person = { 
  first_name: 'abcde', 
  age: 10, 
  gender: 'm' 
}; 

const { first_name, age } = person;
console.log(first_name)
console.log(age)

//--------- Problem2 --------

// TODO combine below arrays into one array array3 
const array1 = [1,2,3]; 
const array2 = [4,5,6]; 
// array3 should be [1,2,3,4,5,6]
const array3 = [...array1, ...array2];
console.log(array3)
 
 
 // TODO combine below objects into one personDetails object 
const basicDetails = { 
  name: 'abcde', 
  age: 10, 
  gender: 'm' 
}; 
 
const educationDetails = { 
  degree:'xyz', 
  college:'anc', 
}

const personDetails = { ...basicDetails, ...educationDetails}
console.log(personDetails)


//--------- Problem3 --------

function largestNumber (numArray){ 
  // TODO complete this 
  let largeNum=0
  for (let i=0; i<numArray.length-1; i++){
    largeNum = numArray[i]>numArray[i+1] ? numArray[i] : numArray[i+1]
  }
  return largeNum
} 
 
let numArray1 = [1,5,7,9]
let result1 = largestNumber(numArray1)
console.log(result1)
let numArray2 = [-1,-5,0,-100] 
let result2 = largestNumber(numArray2)
console.log(result2)


//------------ Problem4 -----------

function updateSalaries (employeesArray, percent){ 
  // TODO complete this 
  
  return employeesArray.map((item) => item + (item/percent))
  
} 
  
let employeesArray = [100,500,700,400], percent = 10 
console.log(updateSalaries(employeesArray, percent))
