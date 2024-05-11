// build-in data type : number, string ,boolean, void ,undefined , null


let userId : number;
let firstName : string;
let lastName : string;
let isActivated : boolean;
let fullName : string;

userId = 101;
firstName = "Mohammad";
lastName = " Sumon";
isActivated = true;

fullName = firstName.concat(lastName);

console.log( `Your id: ${userId}, user name: ${lastName}, full name : ${fullName},account activated: ${isActivated} `);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
