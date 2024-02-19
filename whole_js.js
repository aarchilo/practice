// fetch("https://api.publicapis.org/entries")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
//js single threaded language
// async function getAPI() {
//   var hh = await fetch("https://api.publicapis.org/entries");
//   const data = await hh.json();
//   console.log(data);
// }
// getAPI();
// fetch("https://api.publicapis.org/entries", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// //callback function
// setTimeout(() => {
//   console.log("hello");
// }, 3000);
// //anonymous function
// var m = function () {
//   console.log("anonymous function");
// };
// m();
// //arrow
// var add = () => {
//   console.log("arrow function");
// };
// let const-->hoisting not work  ,var work
// console.log(a, b); //not work as local execution block
// console.log(c); // work   as global execution block
// let a = 10;
// const b = 20;
// var c = 30;
// //array as set
// var arr = [1, 2, 3, 4, 5, 1];
// var set = new Set([...arr]);
// console.log(set);
// //closure
// function outerFunction() {
//   var x = 10;
//   function innerFunction() {
//     console.log(x);
//   }
//   return innerFunction();
// }
// ///////////------
// outerFunction();
// //sort the array
// var sorted_onr = arr.sort((a, b) => a - b);
// //map with key value pair
// const map1 = new Map();
// arr.map((x) => {
//   if (map1[x]) {
//     map1[x]++;
//   } else {
//     map1[x] = 1;
//   }
// });
// console.log(map1);
// //filter

// console.log(m);
// //hoisting
// let a = 1;
// const b = 1;
// var m = b + 1;
// console.log(b);
// //closures
// function outer() {
//   var m = 1;
//   function inner() {
//     console.log(m);
//   }
//   inner();
// }
// outer();
// var arr = [1, 1, 2, 3, 4, 5, 1];
// var arr1 = arr.filter((i) => {
//   if (arr.indexOf(i) !== -1) {
//     return i;
//   }
// });
// var m = new Set([...arr]);
// console.log(m);
// var z = new Map();
// arr.map((i) => {
//   if (z.has(i)) {
//     z.set(i, z.get(i) + 1);
//   } else {
//     z.set(i, 1);
//   }
// });
// var i = z.keys();
// var ww = Array.from(i);
// // queue, stack, webAPI--> event loop
// //promises
// let p=new Promise((resolve,reject)=>{
//    var a=1;
//    var b=1;
//    if(a==b){
//      resolve();
//    }
//    else{
//      reject();
//    }
// })
// p.then(()=>console.log("success")).catch(()=>console.log("failed"))
// currying in js
// function area(l) {
//   return function (b) {
//     return console.log(l * b);
//   };
// }
// area(2)(3);
// class fruits{

//   constructor(){
//   }
//   function setName(name){
//     this.name=name;

//   }
// }