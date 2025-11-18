/* Age Category Message
let age = Number(prompt("Enter your age"))

if(age<18){
    console.log("You are a minor");
}else if(age>18 && age<=60){
    console.log("You are an adult");
}else{
    console.log("You are a senior citizen");
}
*/
/* Even or odd sum
let number1 = Number(prompt("First No."));
let number2 = Number(prompt("Second No."));

((number1+number2)%2==0)? console.log("Even Sum") : console.log("Odd Sum");
*/

/* Charachter case checker
let character = prompt("Enter a character");
if(character == character.toLowerCase() && character == character.toUpperCase()){
    console.log("Character is not an alphapet");
}else if(character == character.toLowerCase()){
    console.count("Is in lower case");
}else{
    console.log("Is in upper case");
}
*/
/*Largest of three number
let first = Number(prompt("Enter 1st no."))
let second = Number(prompt("Enter 2nd no."))
let third = Number(prompt("Enter 3rd no."))

let a = first>second? first:second;
let b = a>third?a:third;

console.log(`The largest number is ${b}`)
*/
/* Simple calculater
let first = Number(prompt("Enter 1st no."))
let second = Number(prompt("Enter 2nd no."))
let third = prompt("Enter 3rd no.");

switch(third){
    case "+":
        let a = first+second
        console.log(a);
        break;
    case "*":
        let b = first*second;
        console.log(b);
        break;
    default:
        console.log("Incorrect data is being sent");
        break;
}
*/
/* variable swapping without using third variable
let x = 20
let y = 30

x = x+y;
y = x-y;
x = x-y;
console.log(x,y)
*/
/* Palindrome
let a ="sum";
let b = a.split("");
// [s, u, m]
let reverse ="";
for(let i=b.length-1;i=>0;i--){
    console.log(b[i]);
    reverse+=b[i]
}
*/
/* Second highest number
let a = 9.5
let b = 10
let c = 8

let d = (a>b)?a:b;//10
let e = (b>c)?b:c;//9
let f = (a>c)?a:c;
let g = "";
if(d==e){
    g = (d>f)?f:d;
}else{
    g = (d>e)?e:d;
}
console.log(g);
*/

//first non repeating character
// let vare = "liive";
// let spl = vare.split("");
// let unique="";
// let uniqueBool=false;
// for(let i=0;i<spl.length;i++){
//     let a=0;
//     for(let j=0;j<spl.length;j++){
//        if(spl[i]===spl[j]){
//         a++
//        } 
//     }
//     if(a==1){
// console.log("unique "+spl[i]);
// break;
//     }
// }
// console.log(unique, "is the first non repeated value");

// let a = 3;
// while(a<=30){
//     if(a%3===0){
//         console.log(a);
//     }
//     a++;
//;
// let anss = [new Set(ans)];
//     console.log(a);
//     a+=3;
// }
// let ans = [1,2,3,2];
// let anss = [...new Set(ans)];
// let ansss = anss.sort(function(a,b){
//     return b-a;
// })
// console.log([...new Set(ans)].sort(function(a,b){
//     return b-a;
// })[1]);
// console.log(anss[1]);
// let obj={}

// ans.forEach(function(val){
//     obj[val]===undefined? obj[val]=1:obj[val]++;
// })
// let obj={};
// let maxFreq = 0;
// let maxFreqNum;
// ans.forEach(val => {
//     obj[val] === undefined?obj[val]=1:obj[val]++;
//     if(obj[val]>maxFreq){
//         maxFreq = obj[val];
//         maxFreqNum=val;
//     }
// });
// console.log(`The number ${maxFreqNum} has the highest frequent value of ${maxFreq}`)

//implementing HOF where the argument will run after 3 seconds.
// function abcd (fn){
// setTimeout(fn, 3000)
// }

// abcd(()=>{
//     console.log("Hi")
// })

// let a = [1,2,3,4,5];

// function mapp(arra, fn){
//     let arr = [];
//     for( i=0;i<arra.length;i++){
//         arr.push(fn(arra[i]));
//     }
//     return arr;
// }

// console.log(mapp(a, (val)=>val+1));
//counter = 0;

// function counter(){
//     let count =0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let fn = counter();
// fn();
// fn();
// fn();
// fn();


// function banana h woj ki function ko run krne k liye limit kare ki 3 baar to sirf 3 baar chale.
// function fnlimit(limit, fn){
//     let limi = 0;
//     return function(){
//         if(limit>limi){
//             limi++;
//             fn();
//         }
//     }
// }

// let fn = fnlimit(3, ()=> console.log("Hi"))
// fn();
// fn();
// fn();
// fn();
// fn();

// create your own map which will work upon given array.
// let a = [1,2,3,4]
// function mapp(arr, fn){
//     let arrayy = [];
//     for(let i=0;i<arr.length;i++){
//         arrayy.push(fn(arr[i]));
//     }
//     return arrayy;
// }

// mapp(a, (b)=> b+1);

// function delayCallBack(time, fn){
//     setTimeout(fn, time);
// }

// delayCallBack(3000, ()=> console.log("Chal gaya"))

// function counter(){
//     let count =0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// let fn = counter();

// function which returns a function with a greeting

// function abcd(){
//     return function(name){
//         console.log(`GM ${name}`)
//     }
// }

// let f = abcd()
// f("Nilesh");

// function that takes a callback and only executes it once.

// function executeOnce(fn){
//         let executed=false;
//         return function(){
//         if(!executed){
//             executed=true;
//             fn();
//         }
//     }
// }

// let f = executeOnce(()=> console.log("hi"));

//create a function which allowes its exuection once 2 seconds are completed.

function callAfterSomeTime(time, fn){
    let lastCall = 0;

    return function(){
        let timeNew = Date.now();
        if(timeNew-lastCall>=time*1000){
            fn();
            lastCall=timeNew;
        }
    }
}
let f = callAfterSomeTime(2, ()=>console.log("hi"));
f();


