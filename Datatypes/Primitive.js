// String Data Type

let movieName="Bethlahem Kudumba Unit"
let theatre="PVR Cinema";
console.log(typeof movieName);
console.log(typeof theatre);


// Number Data Type
let ticketPrice=200;
let noOfSeats=5;  //Whole number
let rating=4.5    //Integer number
let totalAmount=ticketPrice*noOfSeats;
console.log(totalAmount);


// Boolean (True, False)

let isPaymentCompleted=true;
let hasShowStarted=false;


// Undefined

let interviewDate;
console.log(interviewDate);

// Null

let Salary=null
console.log(Salary);
console.log(typeof Salary);


// BigInt

let population=1000000000000000000000n;  //n is Suffix because giving last
                                             // Prefix means first

//--------------------- or -------------------------

let transactionId=BigInt(675738366893736638);


// let a=10n;
// let b=20;
// console.log(a+b); // type error we can't do add with bigint with normal int

//-----------------------------------------------------------


// Symbol DataType

let a="Christin";
let b="Christin";
console.log(a==b);  // it gives true


let user1=Symbol("Christin")
let user2=Symbol("Christin")
console.log(user1==user2); // it gives false because it uses symbol for unique

