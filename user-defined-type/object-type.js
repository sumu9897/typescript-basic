var users;
users = [];
var user1;
user1 = { userName: "mohammad", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "sumon", userId: 102 };
users.push(user2);
// console.log(users);
for (var key in users) {
    console.log(users[key]);
}
