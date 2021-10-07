function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";

let father = new Person();

console.log(father) // empty person object
console.log(father.nationality) // English