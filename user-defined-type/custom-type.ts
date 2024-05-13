type User = { userName : string; userId: number}

let users : User[];
users = [];


let user1 : User;
user1 = {userName: "mohammad", userId:101};
users.push(user1);

let user2 : User;
user2 = {userName: "sumon", userId:102};
users.push(user2);

let user3 : User;
user3 = {userName: "jibon", userId:103};
users.push(user3);

// console.log(users);

type RequestType2 = "GET" | "POST";
let getRequest: RequestType2;
getRequest = "GET";

function requestHandler(requestType: RequestType2){
   console.log(requestType)
}
requestHandler(getRequest);