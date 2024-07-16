/*

T-TASK:

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va 
ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

*/

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const result: number[] = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
      } else {
          result.push(arr2[j]);
          j++;
      }
  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const array1 = [0, 3, 4, 31, 90];
const array2 = [4, 6, 30];
const result = mergeSortedArrays(array1, array2);
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

