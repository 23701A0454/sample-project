const person = { name: "Alice", age: 25 };
Object.freeze(person);

person.age = 30; 
console.log(person.age); 
