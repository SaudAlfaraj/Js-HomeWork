const space = "-----------";

// التمرين الأول

// تحويل الرقم إلى نص

let num = 42;
const numTostr = String(num);

console.log(space);

// تحويل النص إلى رقم

let text = "25";
const textTonum = Number(text);

// التمرين الثاني

let str2 = "10";
const str2Tonum = Number(str2);
console.log(`${typeof str2Tonum} : ${str2Tonum}`);

console.log(space);

// العمليات الحسابية

let str2math = str2Tonum + 3
console.log(str2math);
let str2math2 =str2Tonum -1;
console.log(str2math2);


console.log(space);

// التمرين الثالث

let str3 = "15.5"
const str3Tofloat = parseFloat(str3);
console.log(`${typeof str3Tofloat} : ${str3Tofloat}`);

console.log(space);

// العمليات الحسابية

let str3TofloatMath = str3Tofloat *2;
console.log(str3TofloatMath);

let str3TofloatMath2 = str3Tofloat /5;
console.log(str3TofloatMath2);

console.log(space);

// التمرين الرابع

let str4 = "5";
let num2 = 3;
let numMath = str4 + num2;
console.log(numMath);
// الناتج 53 لأن لايمكن جمع نص ورقم
// ولاكن يمكن طرحهما لأنه لايعتبرهم عملية دمج

console.log(space);

// التمرين الخامس

let bol = true;
let num3 = 1;
let bolNum = num3 + bol;
console.log(bolNum); // الناتج 2 لأن ترو قيمتها 1 و الرقم الذي لدينا قيمة 1 فعند جمعهم الناتج 2
