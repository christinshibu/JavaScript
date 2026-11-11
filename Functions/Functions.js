// function greeting(){
//     console.log("Good Morning");
//     console.log("Attend the jail fast");
// }
// greeting()


function coffeeMachine(customer,coffeeType,price){ 
console.log("Type of coffee:",coffeeType);
// console.log(HotelTaj); ------------------------>It throws reference error
console.log("Boil Water");
console.log("Add Milk");
console.log("Add Coffee Powder");
console.log("Add sugar");
console.log("Pour coffee in a cup");
console.log("Total Price is:",price);
console.log("Prepared Coffee for:",customer);
}

coffeeMachine("Christin","Choclate Coffee",150) //if we didn't give 150 it will
                                               // give undefined for line 16

                                               

function Message(company){
    for(let i=1;i<=50;i++){
        console.log("Count",i);
        console.log("Join the great company",company);
        console.log("Feel the actual Heaven(Hell)");
    }
}
Message("Testyantra")

//----------------------------------------------------------------------------

//1. Employee Salary Calculation

function calculateSalary(basicSalary,bonus){
    let totalSalary=basicSalary+bonus;
    console.log("Total Salary:",totalSalary);
}
calculateSalary(25000,5000)


//----------------------------------------------------------------------------

//2. Electricity Bill Calculation

function calculateElectricityBill(units,rate){
    let bill=units*rate;
    console.log("Electricity Bill:", bill);
}

calculateElectricityBill(150,7)

//----------------------------------------------------------------------------

//3. Bank Balance

function checkBalance(balance,deposite){
    let newBalance=balance+deposite;
    console.log("New Balance:",newBalance);
}

checkBalance(20000,5000)

//----------------------------------------------------------------------------

//4. Shopping Bill

function calculateShoppingBill(price,quantity){
    let total=price*quantity;
    console.log("Shopping Bill:",total);
}

calculateShoppingBill(500, 3)

//----------------------------------------------------------------------------

//5. Student Marks

function calculateTotalMarks(eng, maths,chemistry){
    let total= eng+maths+chemistry;
    console.log("Total Marks:",total);
}

calculateTotalMarks(80,75,90)

//----------------------------------------------------------------------------

//6. Mobile Recharge

function mobileRecharge(balance,rechargeAmount,simCard){
    let newBalance =balance+rechargeAmount;
    console.log("Your"+" "+simCard+" "+"Recharge Successful");
    console.log("New Balance:",newBalance);
}

mobileRecharge(100,299,"Airtel")

//----------------------------------------------------------------------------

//7. Hotel Bill

function calculateHotelBill(HotelName,roomPrice, days,noOfPersons){
    let totalBill=roomPrice*days;
    console.log("Welcome to",HotelName,"Hotel...");
    
    console.log("Hotel Bill:",totalBill);
    console.log("No. of Days:",days);
    console.log("No. of Persons:",noOfPersons);
}

calculateHotelBill("TAJ",2000,3,4)

//----------------------------------------------------------------------------

//8. Perol Cost

function calculatePetrolCost(litres,pricePerLitre){
    let totalCost=litres*pricePerLitre
    console.log("Petrol Cost:",totalCost);
}

calculatePetrolCost(10,105)

//----------------------------------------------------------------------------

//9. Employee Bonus

function calculateBonus(salary,bonusPercentage){
    let bonus=salary*bonusPercentage/100;
    console.log("Employee Bonus:",bonus);
}

calculateBonus(30000,10)

//----------------------------------------------------------------------------

//10. Simple Loan Intrest

function calculateIntrest(principal,rate,years){
    let intrest=principal*rate*years/100;
    console.log("Intrest:",intrest);
}

calculateIntrest(50000,8,2)

//----------------------------------------------------------------------------

// function m16(){
//     return "Christin"
// }
// let res=m16()
// console.log(res);


// function smile(student){
//     return student
// }
// let a=smile("Christin")
// console.log(a);


// function sum(){
//     return 10+20
// }
// let result = sum()
// console.log(result);


// function sum(num1,num2){
//     return num1+num2
// }
// let result=sum(50,20)
// console.log(result);


// function f1(){
//     return "Good Morning"
// }
// console.log(f1());


//--------------------------------------------------------------------------


//Anonymous Function


// let x=function(){
//     console.log("User gone to munnar");
    
// }
// x()


// let button=document.getElementById("btn")
// button.onclick=function(){
//     alert("Tickets Booked Successfully")
// }                                        need to create button in html 
                                            // file and give id=btn


// let b=function(){
//     console.log("Anonymous");
    
// }

// b()                                            


//----------------------------------------------------------------------------


// Function Expression

// let a=function f1(){
//     console.log("Function expression");
// }
// a()


// function thinking(){
//     return "Blast";
//     console.log("After return");
    
// }
// let a=thinking()
// console.log(a);

// function thinking(){
//     console.log('Before Return');
//         return "Blast"
// }
// let a=thinking()
// console.log(a);


//------------------------------------------------------------------------

// Arrow Function ----- ES6

// let a=()=>{                                 ()=> --- Fat Arrow
//     console.log("This is arrow function");
    
// }
// a()


// let a=(num1,num2)=>{
//     console.log("This is arrow function");
//     console.log(num1+num2);
    
// }
// a(10,20)


// let a=()=>{
//     console.log("This is arrow function");
//     return "Testyantra"
// }
// let result=a()
// console.log(result);


// let a=user=>{
//     console.log("Good Morning",user);
// }
// a("Christin")


// Case ---> 1

// let b=()=>
//     console.log("Dead Zone");
// b()


// Case ---> 2

// let a=()=>
//     "hii";
// let result=a()
// console.log(result);


// let x=a=>
//     console.log(a+"20");
// x(10)
    

// let x=a=>
//     console.log(a-"20");
// x(10)


// --------------------------------------------------------------------

// f1()
// function f1(){
//     console.log("Have a Good Day");   
// }                  -----> Getting Output 


// x()
// let x=()=>{
//     console.log("Bye..Bye..");
// }                  -----> Reference Error


// console.log(christin);
// var christin=()=>{
//     console.log("Hello");
// }                 ------> Undefined 


// christin()
// var christin=()=>{
//     console.log("Hello");
// }

// --------------------------------------------------------------------
