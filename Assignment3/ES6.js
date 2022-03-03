
//One Liner
const printName = Name =>  `Hi ${Name}`;

console.log(printName("Shubham"));

//Template Literals 
const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;

console.log(printBill("Shubham",500));

//Destructuring
const person = {
    NAME: "Shubham Kukreti",
    AGE: 23
}

let {NAME,AGE} = person;
console.log(NAME);
console.log(AGE);