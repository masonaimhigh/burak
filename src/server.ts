// TypeScript
// Compiled languages: Java, GoLang, C, C++, C#, Rust => Compiling & Running,

// Interpreted Languages: NodeJs, Python, PHP, Ruby   =>Running
//Type script dynamic type integration ni olib kirgan, hosil qib bergan
// typeScript = Java script + type script elements and components
//Error type
// Types in JavaScript
// prmitive - string, number, boolean,null, undefined, symbol
// object - objects, arrays, maps

// let box: string;
// box = "hello";
// box = 100; // error type string

// let box: string = "hello";
// box = "100";

// const counter: number = 100;
// let stage: number | string = "hello";
// stage = 100;

// let pending: boolean;
// pending = true;

// const pending: boolean = true;

//Object
// interface
// interface Person {
//     name: string,
//     age: number,
//     nation: string
// }
// const person: Person = {
//     name: "Martin",
//     age: 300,
//     nation: "Australian"
// }

// ARRAY
// let skills: string[];
// skills = ['Problem solving', "software design", 'Programming'];

// let skill: (number | string)[];
// skill = ['Problem solving', "software design", 'Programming', 100];

//class

// class Person {
//   age: number;
//   firstName: string;
//   lastName: string;

// constructor(age: number, firstName: string, lastName: string) {
//   this.age = age;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   }
// }

// const person1 = new Person(30, 'Martin', 'Robertson')

// console.log("Executed");

// import moment from 'moment';
// const currentTime = moment().format('YYYY MM DD')
// console.log(currentTime);

// const person: string = 'Martin';
// const count: number = 100;

//Architectual pattern: MVC, Dependency Injection, MVP - bakend suyagi, malumotlar oqimini tartibga soladigan vosita
// MVC Model view controller

//Design pattern: Midleeware, Decorator, - butun bakend tizimini tartibga soluvchi patternlar - malum bir bo'lim qo'l
//Types: Creational Structural Bahavioral 

// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function
//  bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

function getHighestIndex(arr) {
    if (Array.isArray(arr)) {
      let max = arr[0];
      let maxIndex = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          maxIndex = i;
        }
      }
      return maxIndex;
    } else {
      return "please insert array";
    }
  }
  console.log(getHighestIndex([5, 41, 55, 99, 7]));
  console.log(getHighestIndex([6, 41, 85, 39, 71]));