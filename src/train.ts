/*
LAdded-TASK: 

M-TASK: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi
 har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan
  object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1},
 {number: 2, square: 4}, {number: 3, square: 9}];
*/
type NumberSquare = {
  number: number,
  square: number
};

function getSquareNumbers(numbers: number[]): NumberSquare[] {
  return numbers.map(num => ({
      number: num,
      square: num * num
  }));
}

// Example 
const result = getSquareNumbers([1, 2, 3]);
console.log(result);





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

