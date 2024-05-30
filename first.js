// for printing
console.log("hey its sam");
console.log("welcome here");
// declaring a variable 
let name = "samsaraswat";
console.log(name);
let age = 20;
console.log(age);
let x = null;
console.log(x);
let y = undefined;
console.log(y);
// camel case for variable
let isFollow = true
console.log(isFollow);
// constant variable
const pi = 3.14;
console.log(pi);
// object dclaration
const student = {
    age : 20,
    name : "sam",
    isPass : true,
};
// to change the values
student["age"] = student["age"] + 2;
console.log(student.name);
console.log(student["age"]);
// practice set1
const product = {
    name:"ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);
// practice set2
const profile = {
    name:"sam",
    isFollow: true,
    postNo:195,
    follower:596,
    following:7,
    bio:"hey there",
};
console.log(profile);
console.log(typeof profile["name"]);
/* multiline 
comments here*/
// arithmetic operators
let a = 1;
let b = 6;
console.log("a =",a,  "b =",b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a / b =",a / b);
console.log("a * b =",a * b);
console.log("a % b =",a % b);
console.log("b pow a =",b ** a);
a++;
console.log(a);
a--;
console.log(a);
// assignment operators
x = 1;
console.log(x += 6);
// comparison operator
ths = 5;
that = "5";
console.log(ths === that);
// conditional statements
age = 20;
if (age>18){
    console.log("you can vote");
}
// ternary operator
result = age > 18 ? "adult":"not adult";
console.log(result);
num = 8;
if(num % 2 === 0){
    console.log("even number");
}else{
    console.log("odd number");
}
// practice set
let number = prompt("hey enter a number");
console.log(number);
if (number % 5 === 0){
    console.log("this number is multiple of 5");
}else{
    console.log("this number is not a multiple of 5");
}
// practice set
let marks = prompt("enter marks");
console.log(marks);
if (marks>=90 && marks<=100){
    console.log("your grade is A");
}else if (marks>=70 && marks<=89){
    console.log("your grade is B");
}else if (marks>=50 && marks<=69){
    console.log("your grade is C");
}else if (marks>=40 && marks<=49){
    console.log("your grade is D");
}else if (marks>=0 && marks<=39){
    console.log("your grade is F");
}


