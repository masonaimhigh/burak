/*
Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, 
ikkinchisi string. Agar string parametr objectni propertysi bolsa true 
bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; 
hasProperty({name: "BMW", model: "M3"}, "year") return false
*/

function hasProperty(obj: object, prop: string): boolean {

  const keys = Object.keys(obj);

  return keys.includes(prop);
}

// Example:
console.log(hasProperty({name: "BMW", model: "M3"}, "model")); 
console.log(hasProperty({name: "BMW", model: "M3"}, "year"));  




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

