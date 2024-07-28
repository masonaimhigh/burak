/*

Y-TASK:

 Z-TASK:

Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin.
Function arraydagi juft sonlarni yigindisini qaytarsin
MASALAN: sumEvens([1,2,3]) return 2 

*/

function sumEvens(numbers: number[]): number {
  return numbers.reduce((sum, num) => {
      if (num % 2 === 0) {
          return sum + num;
      }
      return sum;
  }, 0);
}


console.log(sumEvens([1, 2, 3])); 
console.log(sumEvens([1, 2, 3, 4])); 







/* Project Standards: 
   - logging standards
   - naming standards
     function, method, variable => camel Case
     class => Pascal Case
     folder => kebab-
     css => snake_case
 - Error handling 
 */  
 
 /* REQUEST: types 
 API - Application Programming interface meaning 
   Traditional API
   Rest API
   GraphQL Api
  */

   /* Frontend Development 
  Traditional Frontend Devalopment => SSR (Admin)-> EJS
  Modern Frontend development      => SPA  (User apps) => REACT Library
   */

  /*
    request join
    self destroy 
  */

  /*
    Validation 4 types:

    frontend 
    pipe -  not used in Burak
    backend
    database  
    */

