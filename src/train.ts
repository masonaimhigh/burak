//H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu 
// agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: 
function getDigits(input: string): string {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char >= '0' && char <= '9') {
            result += char;
        }
    }
    return result;
}


const result = getDigits("m14i1t");
console.log(result);  


