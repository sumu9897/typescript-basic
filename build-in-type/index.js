// build-in data type : number, string ,boolean, void ,undefined , null
var userId;
var firstName;
var lastName;
var isActivated;
var fullName;
userId = 101;
firstName = "Mohammad";
lastName = " Sumon";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id: ".concat(userId, ", user name: ").concat(lastName, ", full name : ").concat(fullName, ",account activated: ").concat(isActivated, " "));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi I am display");
}
display();
