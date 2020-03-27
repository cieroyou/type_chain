interface Human{
  name: string,
  age: number,
  gender: string
}
const person = {
  name: "sera",
  age: 30,
  gender: "femail"
}
const sayHi = (person: Human): string =>{
  return `hello my name is ${person.name} and ${person.age} years old. and i'm ${person.gender}`
}
  
console.log(sayHi(person));
export {};


