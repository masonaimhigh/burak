/*

W-TASK:

X-TASK:

 Shunday function yozing, uni object va string parapetrlari bolsin. Function string
  parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object
   bolsa ham sanasin)
 MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

*/

function countOccurrences(obj: any, key: string): number {
  if (obj === null || typeof obj !== 'object') {
      return 0;
  }

  let count = 0;

  for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
          if (k === key) {
              count++;
          }
          count += countOccurrences(obj[k], key);
      }
  }

  return count;
}

const testObj = {model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}};
const key = 'model';
console.log(countOccurrences(testObj, key)); 





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

