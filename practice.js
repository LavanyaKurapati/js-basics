// ---- Swapping -------
let a=5, b=9
let temp;
temp=a;
a=b;
b=temp;
console.log(a,b)

// ---- Append object to array -------
let array=[2, 4]
const person={
    name:'lavanya',
    age:21,
    city:'guntur'
}
array.push(person)
console.log(array)

// using spread operator
let arr=[2,3,4]
let obj={
    name:'hdgh',
    age:10
}
arr = [...arr, obj]
console.log(arr)

//using splice
let array1 = [6,9]
let object = {name:'htuy', age:12}
let index=array1.length
array1.splice(index,0,object)
console.log(array1)

//----Removing duplicates-------

let arr1=[2,4,6,8,0,2,4]
let res=[]
for (let i of arr1){
    if(res.indexOf(i) === -1){
        res.push(i)
    }
}
console.log(res)

//using set
let arr2=[1,2,3,1]
arr2 = [...new Set(arr2)]
console.log(arr2)


//-------- Palindrome -------
let string = "madam"
let rev=""
for (let i of string){
    rev = i + rev
}
console.log(string === rev)

// ---Reversing a string--------

let str = 'lavanya'
let rev_str = ''
for (let i of str){
    rev_str = i + rev_str
}
console.log(rev_str)


// ------- checking Positive or negative or zero--------
let num = prompt('Enter Number');
if(num>0){
    console.log('Positive')
}else if(num<0){
    console.log('Negative')
}else{
    console.log('Zero')
}


// ------ Simple Calculator-------
let oper = prompt('Enter Operator (either +, -, * or /): ')
let num1=16, num2=9
let result=0

if(oper === '+'){
    result = num1+num2 
}
else if(oper === '-'){
    result = num1-num2
}
else if(oper === '*'){
    result = num1*num2
}
else if(oper === '/'){
    result = num1/num2
}
console.log(`${num1} ${oper} ${num2} = ${result}`)

