// enum - store constants; duplicate value is nor allowed here
//enum types : numeric, string, hetergenous
//numeric
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["ReadData"] = 1] = "ReadData";
    UserRequest[UserRequest["SaveData"] = 3] = "SaveData";
    UserRequest[UserRequest["DeleteData"] = 4] = "DeleteData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
//string enu
var RequestType;
(function (RequestType) {
    RequestType["readData"] = "READ_DATA";
    RequestType["deleteData"] = "DELETE_DATA";
})(RequestType || (RequestType = {}));
console.log(RequestType);
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
    RequestType2[RequestType2["id"] = 101] = "id";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
