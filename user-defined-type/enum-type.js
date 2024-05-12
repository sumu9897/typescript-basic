// enum - store constants; duplicate value is nor allowed here
//enum types : numeric, string, hetergenous
//numeric
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["ReadData"] = 0] = "ReadData";
    UserRequest[UserRequest["SaveData"] = 1] = "SaveData";
    UserRequest[UserRequest["DeleteData"] = 2] = "DeleteData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
