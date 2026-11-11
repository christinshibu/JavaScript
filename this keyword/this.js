//-------------------------------------this---------------------------------

// let student={
//     user:"Liya",
//     age:23,
//     display:function liya(){
//         console.log(this);
//         console.log(this.user);    //this--->student
//                                   //this.user--->student.user
        
//     }
// }
// student.display()

//Non-strict mode

// function f1(){
//     console.log(this); //this keyword points to window
// }
// f1()

// "use strict" //strict mode
// function f1(){
//     console.log(this); //this keyword value will be undefined
    
// }
// f1()

//-------------------------------------------------------------------------

//arrow functions do not have their own 'this' keyword
//it takes from outer scope(Inside outer scope we have window object)
//so it points to window object only...

// let a=()=>{
//     console.log(this);
// }
// a()

// let student1={
//     user:"liya",
//     age:22,
//     display:()=>{
//         console.log(this);
        
//     }
// }
// student1.display()


// let account={
//     holder:"Kalam",
//     balance:5000,
//     withdraw:function(amount){
//         if (amount <= this.balance){
//             this.balance=this.balance-amount;
//             console.log("Withdrawn:"+amount);
//             console.log("Ramaining balance:"+this.balance);
//         }
//         else{
//             console.log("Insufficient balance");
//         }
//     },
//     showBalance:function(){
//         console.log("Balance:"+this.balance);
//                     }
// };
// account.withdraw(1000);
// account.showBalance();


// let cart={
//     item:"Headphones",
//     price:1500,
//     quantity:2,
//     showTotal:function(){
//         console.log("Item"+this.item);
//         console.log("Total"+(this.price*this.quantity));
//     }
// };
// cart.showTotal();


// let student={
//     name:"Kalam",
//     maths:80,
//     science:90,
//     english:70,
//     showResult:function(){
//         let total=this.maths+this.science+this.english;
//         let average=total/3;
//         console.log("Student:"+this.name);
//         console.log("Total marks:"+total);
//         console.log("Average:"+average);
//     }
// };
// student.showResult()


// let employee={
//     name:"Ravi",
//     monthlySalary:25000,
//     showYearlySalary:function(){
//         let yearlySalary=this.monthlySalary*12;
//         console.log("Employee:"+this.name);
//         console.log("Yearly Salary:"+yearlySalary);
//     }
// };
// employee.showYearlySalary();

