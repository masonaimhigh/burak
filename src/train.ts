/*
O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array 
ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
*/


function calculateSumOfNumbers(a: any[]) {
  let total = 0;
  for(let i = 0; i < a.length; i++){
    if(typeof a[i] === 'number'){
      total += a[i];
    }
  }
  return total;
}

console.log(calculateSumOfNumbers(["abc", true, false, undefined, 10, null, 5]));



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

