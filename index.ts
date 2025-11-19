// // // // // // // typescript is js with additional features

// // // // // // // types in typescript
// // // // // // // Below are primitvie types in TS you can't altered it

// // // // // // // string - store text
// // // // // // // number - integers, numbers
// // // // // // // boolean - true , false
// // // // // // // undefined
// // // // // // // null
// // // // // // // bigint
// // // // // // // symbol

// // // // // // // var Variable_name : number = <value>  this is called as a type annotation or type signature

// // // // // // let id: number = 10;
// // // // // // let firstname = "Shahid"  // typescript is not dumb it understand firstname is going to store string so it does'nt throw any error
// // // // // // let SecondName: string = "Ansari;"


// // // // // // // unions of type
// // // // // // // in union you can define there may be two possibilites that your data in number or string .

// // // // // // // example-

// // // // // // // unions

// // // // // // let userId: number | string = "26";
// // // // // // userId = 10;


// // // // // // // Arrays

// // // // // // // let <variable_name> : type[] = [val1,val2,....];

// // // // // // let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8];  // you can add only num

// // // // // // let any: any[] = [1, 2, 3, "4"];  // you can add any variable in this like js

// // // // // // // let arr : string[] = ["Hello", "Hi"];
// // // // // // // console.log(arr)
// // // // // // // just like union of variable it has union of array

// // // // // // let data: (number | string | boolean)[] = [1, "Sahid", true];
// // // // // // console.log(data)

// // // // // // // array in form of type tuple

// // // // // // let data1: [number, string, boolean] = [1, "Shahid", true];


// // // // // // // interfaces
// // // // // // // interface is used to define the structure of the object
// // // // // // // how to define types for object
// // // // // // 1. classes
// // // // // // 2. Interface

// // // // // // let p1 : Product = {
// // // // // //     name:"Iphone",
// // // // // //     price:100000,
// // // // // //     brand:"Apple"
// // // // // // }


// // // // // // function

// // // // // // function sum(a:number, b:number):number{
// // // // // // return a + b;
// // // // // // }

// // // // // // console.log(sum(5))

// // // // // // typescript does not run in runtime it first convert the code in js then run


// // // // // // Date object in typescript

// // // // // // let dob = new Date(2006,7,6)
// // // // // // console.log(dob)
// // // // // // console.log(dob.getDate())

// // // // // // any type object   -> free ticket to get rid of TS type checking

// // // // // // if you want to define a variable type any, then either mention ":any" while declaring the variable or do not assign a value while declaring a variable

// // // // // let x; // this variable x is of type  any
// // // // // x="10";
// // // // // x=10;


// // // // // function func():void{
// // // // //     // void means the return type of the function is not matter it can be anything like number, string etc


// // // // //     // if you don't return anything in function then it will return undefined

// // // // // }
// // // // // console.log(func())


// // // // // ENUMS or Enumeration

// // // // // Enum in TypeScript is a way to define a group of named constant values.
// // // // it can be any type like number, string etc

// // // // // enum TicketStatus {
// // // // //     INITALIZED = "initalized",
// // // // //     CANCELLED = "cancelled",
// // // // //     PENDING = "pending",
// // // // //     CLOSED = "closed"
// // // // // }

// // // // // console.log(TicketStatus.CANCELLED)


// // // // enum StatusCode {
// // // //     NotFound = 404,
// // // //     Success = 200,
// // // //     Accepted = 202,
// // // //     Created = 201,
// // // //     BadRequest = 400
// // // // }

// // // // const responce = {
// // // //     url: "www.something.com",
// // // //     type: "Get",
// // // //     data:"Some String",
// // // //     status:StatusCode.Success
// // // // }
// // // // console.log(responce)

// // // // Practice or Example

// // // /*
// // // * we want to define a common type for authentication forms
// // // * this common type will take multiple parameters
// // // *  - name of the form
// // // *  - how to handle submisson of form
// // // *  - how to handle reset of the form
// // // *  - what should be the text of the submitting button 
// // // */

// // // interface AuthForm {
// // //     name: string,
// // //     submitButtonText: string,
// // //     onReset: (e: any) => void,
// // //     onSubmit: (e: any) => void
// // // }

// // // const loginForm: AuthForm = {
// // //   name:"Login Form",
// // //   submitButtonText:"Login",
// // //   onReset:(e)=>{
// // //     // some impl
// // //   },
// // //   onSubmit:(e)=>{
// // //     // some impl
// // //   }
// // // } 

// // // console.log(loginForm)


// // // type vs interface


// // type text = string;
// // // to defining custom types of arrays, type keyword is more easy
// // type stringArray = String[];

// // // using an interface we will define an object which will be always having keys of type number and value to be of the type of the array

// // interface numberArray {
// //     [index: number]: number
// // }


// // can type and interfaces represent functions ?

// type logger = (msg: string, errorCode: number) => void;


// interface loggerInterface {
//     (msg: string, errorCode: number): void;
// }


// // define union is possible with type but not with interface

// type unionOfStarndom = number | string;



//  writing complex number

// let schoolName: "DPS" | "DAV" = "DPS";
// let anotherName = schoolName;
// console.log(anotherName)

// classes

class Product {
    public name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display(): void {
        console.log("Product name is ", this.name, "and the price is", this.price)
    }
    setPrice(p: number): void {
        if (p <= 0) return;
        this.price = p;
    }
}

const p1 = new Product("Iphone", 100000);
console.log(p1)
