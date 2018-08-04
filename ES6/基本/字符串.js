split  //分隔
substr //截取多长



let h = 'hello';
let a = 5,b = 6;

let st = 'someone say'+h+'to you';

es6//模板字符串````````
let str = `sidada`;
let string = `sidada${h}some${a+b}<h1>hhh</h1>`;
document.write(string);
// .indexof
// .includes
// .startsWith       boolen
// .endsWith         boolen
// console.log(str.padStart(8,'abc'));   //abcabxy      前插  
// padend
// repeat

十进制-二进制
let a = 5;
console.log(a.toString(2));
二进制-十进制
let b = 101;
console.log(parseInt(b,2)); //let c = 0505; 就会报错

let  a = 0B0101; //二进制
console.log(a);
let b = 0o666;   //八进制
console.log(b);

console.log(Number.isFinite(5));
console.log(Number.isInteger(NaN));
console.log(Number.isNaN(NaN));
console.log(Number.parseFloat(5.6));
console.log(Number.parseInt(5.5));
console.log(Number.isSafeInteger()); //最大安全整数  (+/-)2^53-1
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Math.trunc(5.9));   //取整
console.log(Math.sign(5.9));    //判断 + -
