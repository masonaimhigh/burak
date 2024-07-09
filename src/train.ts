/*


R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda 
pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;
*/

function calculate(expression: string): number {
  expression = expression.replace(/\s+/g, '');

  
  const numbers: number[] = [];
  const operators: string[] = [];
  let currentNumber = '';

  for (let char of expression) {
      if (!isNaN(Number(char))) {
          currentNumber += char; 
      } else {
          numbers.push(Number(currentNumber)); 
          currentNumber = ''; 
          operators.push(char); 
      }
  }
  if (currentNumber !== '') {
      numbers.push(Number(currentNumber));
  }

  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
          case '+':
              result += numbers[i + 1];
              break;
          case '-':
              result -= numbers[i + 1];
              break;
          default:
              throw new Error('Raqam kiriting');
      }
  }

  return result;
}

console.log(calculate("1+3")); 
console.log(calculate("10+20-5")); 





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

