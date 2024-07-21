/*

W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin.
Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan 
array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

*/

function chunkArray(input1: number[], input2: number): number[][] {
  const chunkedArray: number[][] = [];
 
  for (let i = 0; i < input1.length; i += input2) {
    const chunk: number[] = input1.slice(i, i + input2);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));



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

