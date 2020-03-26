const myname = "Sera"
const age = 30, gender = "femail";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
}

//gender? 물음표가 없을 경우 'An argument for 'gender' was not provided' 에러가 발생
sayHi(myname,age);

export {};


