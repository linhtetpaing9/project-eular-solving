// 0 to 999 == below 1000
const numbers = Array.from({ length: 999 }, (v, k) => k+1);

const dividedByThree = numbers.filter( v => v % 3 == 0);
const dividedByFive = numbers.filter( v => v % 5 == 0);
console.log(dividedByThree, dividedByFive);

const deDuplicateResult = [...new Set([...dividedByThree, ...dividedByFive])];

const finalResult = deDuplicateResult.reduce((l , c) => l + c);
console.log(finalResult);

// const numbers = Array.from({ length: 999 }, (v, k) => k+1);

// const result = [...new Set([...numbers.filter( v => v % 3 == 0), ...numbers.filter( v => v % 5 == 0)])].reduce((l , c) => l + c);
