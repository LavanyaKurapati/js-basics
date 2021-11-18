//---------- Problem1 ------------

function findFreq(str, char) { 
    // TODO write code here 
    let count = 0;
    for(let i of str){
        if( i.toLowerCase() === char){
            count += 1
        }
    }
    return count;
  } 
   
console.log(findFreq('How many times does the character occur in this sentence?','m'))
console.log(findFreq('How many times does the character occur in this sentence?','h'))



//--------------- Problem 2 ----------

 // Write a function that takes an array as argument. It should return true if all elements in 
  //the array are equal and false otherwise
function areAllEqual(arr) { 
    // TODO write code here 
    return arr.every((value) => value === arr[0])
} 
   
 
console.log(areAllEqual(['test', 'test', 'test']))
console.log(areAllEqual([1,1,1,2]))


// ------------ Problem3 -------------

function subArray(arr, n) { 
    // TODO write code here 
    return arr.slice(-n)
} 
   
console.log(subArray([1, 2, 3, 4, 5], 2))
console.log(subArray([1, 2, 3], 6))
