let users : object[];
users = [];

type User = { userName : string; userId: number}

let user1 : User;
user1 = {userName: "mohammad", userId:101};
users.push(user1);

let user2 : User;
user2 = {userName: "sumon", userId:102};
users.push(user2);

let user3 : User;
user3 = {userName: "jibon", userId:103};
users.push(user3);

console.log(users);