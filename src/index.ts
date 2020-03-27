const myname = "Sera",age = 30, gender = "femail";

// const sayHi = (name:string, age:number, gender:string) => {
//     console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
// }

const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
  };
  
console.log(sayHi(myname, age, gender));  
export {};


