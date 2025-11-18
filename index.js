// // // typescript is js with additional features
// // // types in typescript
// // // Below are primitvie types in TS you can't altered it
// // // string - store text
// // // number - integers, numbers
// // // boolean - true , false
// // // undefined
// // // null 
// // // bigint
// // // symbol
// // // var Variable_name : number = <value>  this is called as a type annotation or type signature
// // let id: number = 10;
// // let firstname = "Shahid"  // typescript is not dumb it understand firstname is going to store string so it does'nt throw any error
// // let SecondName: string = "Ansari;"
// // // unions of type
// // // in union you can define there may be two possibilites that your data in number or string .
// // // example-
// // // unions
// // let userId: number | string = "26";
// // userId = 10;
// // // Arrays
// // // let <variable_name> : type[] = [val1,val2,....];
// // let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8];  // you can add only num
// // let any: any[] = [1, 2, 3, "4"];  // you can add any variable in this like js
// // // let arr : string[] = ["Hello", "Hi"];
// // // console.log(arr)
// // // just like union of variable it has union of array
// // let data: (number | string | boolean)[] = [1, "Sahid", true];
// // console.log(data)
// // // array in form of type tuple
// // let data1: [number, string, boolean] = [1, "Shahid", true]; 
// // // interfaces 
// // // interface is used to define the structure of the object
// // // how to define types for object
// // 1. classes 
// // 2. Interface
// // let p1 : Product = {
// //     name:"Iphone",
// //     price:100000,
// //     brand:"Apple"
// // }
// // function
// // function sum(a:number, b:number):number{
// // return a + b;
// // }
// // console.log(sum(5))
// // typescript does not run in runtime it first convert the code in js then run
// // Date object in typescript
// // let dob = new Date(2006,7,6)
// // console.log(dob)
// // console.log(dob.getDate())
// // any type object   -> free ticket to get rid of TS type checking
// // if you want to define a variable type any, then either mention ":any" while declaring the variable or do not assign a value while declaring a variable
// let x; // this variable x is of type  any
// x="10";
// x=10;
// function func():void{
//     // void means the return type of the function is not matter it can be anything like number, string etc
//     // if you don't return anything in function then it will return undefined
// }
// console.log(func())
// ENUMS or Enumeration 
// Enum in TypeScript is a way to define a group of named constant values.
// enum TicketStatus {
//     INITALIZED,
//     CANCELLED,
//     PENDING,
//     CLOSED
// }
// console.log(TicketStatus.CANCELLED)
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
var responce = {
    url: "www.something.com",
    type: "Get",
    data: "Some String",
    status: StatusCode.Success
};
console.log(responce);
