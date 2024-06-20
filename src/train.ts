/*
K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/

function countVowels(str: string): number {
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']); 
    return str.split('').reduce((count, char) => {
        return vowels.has(char) ? count + 1 : count;
    }, 0);
}


console.log(countVowels("string")); 
console.log(countVowels("Hello MIT!")); 
console.log(countVowels("PRTZSW")); 


/* Project Standards: 
   - logging standards
   - naming standards
     function, method, variable => camel Case
     class => Pascal Case
     folder => kebab-
     css => snake_case
 - Error handling 
 */  
 
 /* 
 API - Application Programming interface
   Traditional API
   Rest API
   GraphQL Api
  */

   /*
  Traditional Frontend Devalopment => SSR (Admin)-> EJS
  Modern Frontend development      => SPA  (User apps) => REACT Library
   */

  /*
    request join
    self destroy 
  */
