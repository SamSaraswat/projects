for(let i=1;i<=5;i++){
    console.log("sam");
}
// calculating sum of 1 to 5 numbers
let sum =0;
for(let n=1;n<=5;n++){
    sum =sum+n;
}
console.log("sum=",sum);
// while loop
let j=1;
while(j<=7){
    console.log("sam");
    j++;
}
// do while loop
let a=1;
do{
    console.log("sam");
    a++;
}while(a<=10);
// for of loop
let str="sammm";
let size=0;
for (let i of str) {
    console.log("i=",i);
    size++;
}
console.log(size);
// for in loop
let student={
    name:"sam",
    age:20,
};
for (let key in student) {
    console.log(key,student[key]);
}
// print all numbers from 0 to 100
for(let num=0; num<=100;num++){
    if(num%2===0){
        console.log("even numbers are",num);
    }
}
// guessing game
// let gameNum = 25;
// let number = prompt("enter your guess");
// while(number!=gameNum){
//      number =prompt("you are wrong try again");
// }
// console.log("correct guess");
//strings
 str = "sam saraswat";
 console.log(str[0]);
 spclString = `hey`;
//  practice
// let str1 = prompt("enter your full name");
// userName = "@" + str1 + str1.length;
// console.log(userName);
// arrays
let heroes = ["ironman", "thor", "batman", "spiderman"];
console.log(heroes);
console.log(heroes.length);
console.log(heroes[0]);
// loops in array
for(let i = 0; i <heroes.length; i++){
    console.log(heroes[i]);
}
// for of loop
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
// practice set
let marks = [85,97,44,37,76,60];
let summ = 0;
for(let idx of marks){
    summ = summ+idx;
}
console.log(summ);
let avg =summ/marks.length;
    console.log(avg);
// practice set
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log(companies);