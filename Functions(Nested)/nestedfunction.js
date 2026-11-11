//Nested Function importance is to hide the helper functions
// Functions will execute firstly the function calling statements


// function outer(){
//     console.log("This is outer function");
//     function inner(){
//         console.log("This is inner function"); 
//     }
//     inner()
// }
// outer()

//---------------------------------------------------------------------------

// function outer(){
//     let branch="Kochi"
//     function inner(){   -----------> Closure Object ( Storing main function value)
//         console.log(branch);  
//     }
//     inner()
// }
// outer()

//----------------------------------------------------------------------------

// function f1(){
//     function f2(){
//         return "Hello this is Christin"
//     }
//     let res=f2()
//     // console.log(res);
//     return res;    
// }
// let x=f1()
// console.log(x);

//----------------------------------------------------------------------------

// function f1(){
//     function f2(){
//         return "Hello"
//     }
//     let res=f2()
//     console.log(res);
//     return res;
// }
// let output=f1()
// console.log(output);

//----------------------------------------------------------------------------

// function calculateSalary(sal){
//     function calculateBonus(){
//         let Bonus=sal*10/100;
//         // console.log(Bonus);
//         return Bonus
//     }
//     let res=calculateBonus()
//     // console.log(res);
//     return res+sal // 5000+50000 = 55000
    
// }
// let totalSalary=calculateSalary(50000)
// console.log(totalSalary);

//----------------------------------------------------------------------------

