// function createNewPerson(name) {
//     const obj = {};
//
//     obj.name = name;
//     obj.greeting = function () {
//         alert('Hi! I\'m ' + obj.name + '.');
//     }
//     return obj;
// }


// function Person(name) {
//     this.name = name;
//     this.greeting = function () {
//         alert('Hi! I\'m ' + this.name + '.');
//     };
// }
//
// const personO1 = new Person('Sharif');
// const personO2 = new Person('Sarah');
// console.log(this.personO1);
// console.log(this.personO2);

function Person(first, last, age, gender, interests) {
    this.name = {first : first, last : last};
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}
