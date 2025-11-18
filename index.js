// typescript is js with additional features
// types in typescript
// Below are primitvie types in TS you can't altered it
// string - store text
// number - integers, numbers
// boolean - true , false
// undefined
// null 
// bigint
// symbol
// var Variable_name : number = <value>  this is called as a type annotation or type signature
var id = 10;
var firstname = "Shahid"; // typescript is not dumb it understand firstname is going to store string so it does'nt throw any error
var SecondName = "Ansari;";
// unions of type
// in union you can define there may be two possibilites that your data in number or string .
// example-
// unions
var userId = "26";
userId = 10;
// Arrays
// let <variable_name> : type[] = [val1,val2,....];
var ids = [1, 2, 3, 4, 5, 6, 7, 8]; // you can add only num
var any = [1, 2, 3, "4"]; // you can add any variable in this like js
// let arr : string[] = ["Hello", "Hi"];
// console.log(arr)
// just like union of variable it has union of array
var data = [1, "Sahid", true];
console.log(data);
// array in form of type tuple
var data1 = [1, "Shahid", true];
// interfaces 
// interface is used to define the structure of the object
// how to define types for object
1.;
classes;
2.;
Interface;
var p1 = {
    name: "Iphone",
    price: 100000,
    brand: "Apple"
};
