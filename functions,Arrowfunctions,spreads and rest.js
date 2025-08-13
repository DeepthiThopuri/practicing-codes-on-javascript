 //declare and assign the values in different ways 
var a=3;
let b=6;
const c=7;
scrib.show(a)

//call the functions
function add(a,b){
  return a+b;
} 

//using arror function we can call the add function
const addArrow=(a,b) => a+b;
scrib.show(addArrow(3,4));

//display the value with thhe string
let a=10;
scrib.show('the first varible is ${a}');

// display the array of data
let arr=[1,2];
let k=arr[0];
let v=arr[1];
scrib.show(k,v);
scrib.show(m,n);

//spreads and rest
let arr=[1,2];
let arr1=[...arr,3,4];
scrib.show(arr1);s