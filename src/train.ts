/*

S-TASK
Shunday function yozing, u numberlardan tashkil topgan array qabul 
qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2

*/

function missingNumber(nums: number[]): number {
    const n = nums.length;
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    const resultSum = n * (n + 1) / 2;
    return resultSum - sum;
}


console.log(missingNumber([3, 0, 1])); 
console.log(missingNumber([0, 1,]));   
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); 






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

