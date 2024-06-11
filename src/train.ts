/* Project Standards: 
   - logging standards
   - naming standards
     function, method, variable => camel Case
     class => Pascal Case
     folder => kebab-
     css => snake_case
 - Error handling   
 
*/
// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida 
// qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"
function positiveNumbersToStrings(numbers: number[]): string[] {
    return numbers.filter(num => num > 0).map(num => num.toString());
}

// Example usage
console.log(positiveNumbersToStrings([1, -2, 3, 0, 4])); 
console.log(positiveNumbersToStrings([-1, -2, -3]));    
console.log(positiveNumbersToStrings([0, 5, 10]));      

