/*
P-TASK:

Shunday function yozing, u object qabul qilsin va arrayni object 
arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/
function objectToArray(obj: { [key: string]: any }): [string, any][] {
  return Object.entries(obj);
}


const input = { a: 10, b: 20 };
const result = objectToArray(input);
console.log(result);

/*
Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object,
 ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; 
hasProperty({name: "BMW", model: "M3"}, "year") return false
*/

/*

function hasProperty(obj: { [key: string]: any }, prop: string): boolean {
  return obj.hasOwnProperty(prop);
}

// Example 
console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false

*/



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

