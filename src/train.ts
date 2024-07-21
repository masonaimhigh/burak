/*

W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin.
Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan 
array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

*/

function chunkArray<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
      throw new Error("Kiritilgan son 0 dan katta bolishi kerak");
  }
  
  const result: T[][] = [];
  
  for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
  }
  
  return result;
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 4;
const chunkedArray = chunkArray(inputArray, chunkSize);

console.log(chunkedArray); 





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

