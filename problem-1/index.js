// 0 to 999 == below 1000
const numbers = Array.from({ length: 999 }, (v, k) => k+1);

const result = numbers.filter( v => v % 3 == 0 || v % 5 == 0).reduce((l , c) => l + c);
console.log(result);
