// enum - store constants; duplicate value is nor allowed here

//enum types : numeric, string, hetergenous

//numeric

enum UserRequest {
    ReadData = 1,
    SaveData = 3,
    DeleteData,

}
console.log(UserRequest);

//string enu

enum RequestType{

    readData = "READ_DATA",
    deleteData = "DELETE_DATA"
}

console.log(RequestType);

enum RequestType2{

    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = 101,
}

console.log(RequestType2);