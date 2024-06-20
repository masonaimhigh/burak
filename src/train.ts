/*
J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/

function findLongestWord(sentence: string): string {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// const sentence = "I come from Uzbekistan";
const sentence = "SEOUL is the Capital of KOREA";
const longestWord = findLongestWord(sentence);
console.log(longestWord);



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
