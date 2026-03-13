let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.map((_, i, arr) => arr[arr.length - 1 - i]);
console.log(reversed); 
