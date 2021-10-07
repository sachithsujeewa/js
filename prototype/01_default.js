let person = {
    name: "Sachith",
    age: 37
}

let employee = Object.create(person);

console.log(employee) // {} --empty object 🙀😲
console.log(employee.name) // Sachith --prototype data
console.log(person === Object.getPrototypeOf(employee)) // true --check proto

Object.setPrototypeOf(employee, { id: 2, gender: "male" })

console.log(employee.prototype) //undefined
console.log(employee.name) //undefined
console.log(employee.__proto__)  // { id: 2, gender: 'male' }

// 😲 this won't work since this is an object. see constructor function example
// employee.prototype.sayHi = function () {
//     console.log("Hi");
// };


// instead use this 🤣🤣
employee.sayHi = () => console.log("Hi");




