// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

var a = 5; 
const b = 10; 
let c = a + b;

console.log(c);
a = 20;

console.log(+ c);

c = a + b;

console.log(+c)

function conversation () { 
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation();
SayHey();

console.log(SayHey)

function futureage(name,age) {
    sayHey(name);
    const ageInFiveYers = age + 5;
    return name + "will be" + ageInFiveYers + "in 5 years!";
}

console.log(futureage("Gemma, 27"))

