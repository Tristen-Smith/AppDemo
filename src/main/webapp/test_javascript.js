// Comment. The computer ignores this.
/*
whatever
i want
to
type
 */
console.log("Hello there world");

// ES 5
var  x1 = 1;

// ES 6
let x2 = 1;
const x3 = 1;

let variableOne = 5;
let variableTwo = 6;

console.log("variableOne: " + variableOne + " - variableTwo: " + variableTwo);

let variableThree = variableOne + variableTwo;
variableThree++;
console.log(variableThree);

function addNumbers(a, b){
    return a + b;
}

console.log("add numbers: " + addNumbers(22, 32));

let otherFunction = addNumbers;
x = otherFunction(22, 56)
console.log("x: " + x);

//JSON
let personA = {
    name: "Tristen",
    email: "tristen.e.smith@gmail.com"
};

console.log(personA);
console.log(personA.name);
console.log(personA['name']);

// ES 6 Class
class PersonB {
    constructor() {
        this.name = "";
        this.email = "";
    }
    fullName(){
        return this.name + " " + this.email;
    }
}
let personB = new PersonB();
personB.name = "Bob"
personB.email = "Bob.b@gmail.com"
console.log(personB);
console.log(personB.fullName());

//Loop

for(let i = 0; i < 10; i++){
    console.log(i);
}

var colors = ["red", "green", "blue"];
for(let i = 0; i < colors.length; i ++){
    console.log(colors[i]);
}

var personF = {name: "Paul", email: "P@gmail.com"};

for(let field in personF){
    console.log(field + " = " + personF[field]);
}

