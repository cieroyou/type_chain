class Human{
  public name: string;
  public age: number;
  public gender: string;
  constructor(name:string, age:number, gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const sera = new Human("sera",30,"femail")
const sayHi = (person: Human): string =>{
  return `hello my name is ${person.name} and ${person.age} years old. and i'm ${person.gender}`
}
  
console.log(sayHi(sera));
export {};


