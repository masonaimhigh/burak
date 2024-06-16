/*
I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan
 raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
*/

function majorityElement(nums: number[]): number {
  const counts: { [key: number]: number } = {};
  let majorityElement = nums[0];
  let maxCount = 0;

  for (const num of nums) {
      if (counts[num] === undefined) {
          counts[num] = 1;
      } else {
          counts[num]++;
      }

      if (counts[num] > maxCount) {
          maxCount = counts[num];
          majorityElement = num;
      }
  }

  return majorityElement;
}


const result = majorityElement([1, 2, 3, 5, 5, 5, 3, 4]);
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
 
 /* 
 API - Application Programming interface
   Traditional API
   Rest API
   GraphQL Api
  */

// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida 
// qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"
// function positiveNumbersToStrings(numbers: number[]): string[] {
//     return numbers.filter(num => num > 0).map(num => num.toString());
// }

// // Example usage
// console.log(positiveNumbersToStrings([1, -2, 3, 0, 4])); 
// console.log(positiveNumbersToStrings([-1, -2, -3]));    
// console.log(positiveNumbersToStrings([0, 5, 10]));      

