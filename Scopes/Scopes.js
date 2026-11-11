//-------------------------------Global Scope--------------------------------------


// var a=10;
// let b=20;
// const c=30;

// console.log("Outside",a);
// console.log("Outside",b);
// console.log("Outside",c);

// function f1(){
//     console.log("Inside Function",a);
//     console.log("Inside Function",b);
//     console.log("Inside Function",c);
// }
// f1()

// if(true){
//     console.log("Inside Block",a);
//     console.log("Inside Block",b);
//     console.log("Inside Block",c);
// }

// console.log("Outside",a);
// console.log("Outside",b);
// console.log("Outside",c);


//--------------------------------Function Scope------------------------------------

// function vimalJyothi(){
//     var user1="Rose";
//     let user2="Abhishek";
//     const user3="Aswathi";

//     console.log("Victim1",user1);
//     console.log("Victim2",user2);
//     console.log("Victim3",user3);
    
// }
// vimalJyothi()

// console.log("Victim2",user2);
// console.log("Victim3",user3);
// console.log("Victim1",user1);    

//--------------------------------Block Scope--------------------------------------

// if("Qspiders"){
//     var isBatteriesAvailable=false
//     let studentCount=700;
//     const branch="Kochi";

//     console.log("Is Batteries are available:",isBatteriesAvailable);
//     console.log("Total no of Victims:",studentCount);
//     console.log("Branch Name:",branch);
    
// }

// console.log("Is Batteries are available:",isBatteriesAvailable); //Only Var will 
// // execute in Block Scope other let,const will not execute 
// console.log("Branch Name:",branch);
// console.log("Total no of Victims:",studentCount);
    

//-----------------------------------------------------------------------------------


// let companyName="TestYantra"
// function employeeDetails(){
//     console.log("Employee works at "+ companyName);
    
// }
// function companyDetails(){
//     console.log("Company:"+companyName);
    
// }
// employeeDetails()
// companyDetails()


//--------------------------------------------------------------------------------


// let currency = "₹";
// function showProductPrice() {
//     let price = 25000;

//     console.log("Price:", currency + price);
// }
// showProductPrice()

// function showCartTotal() {
//     let total = 45000;

//     console.log("Cart Total:", currency + total);
// }
// showCartTotal();


//-------------------------------------------------------------------------------


// let deliveryCharge = 40;
// function calculateFoodBill() {
//     let foodPrice = 500;
//     console.log("Food Bill:", foodPrice + deliveryCharge);
// }
// calculateFoodBill();
// function calculateOrderBill() {
//     let orderPrice = 800;
//     console.log("Order Bill:", orderPrice + deliveryCharge);
// }
// calculateOrderBill();


//-------------------------------------------------------------------------------


// function scope
// function calculateSalary() {
//     let salary = 30000;
//     let bonus = 5000;
//     let totalSalary = salary + bonus;
//     // console.log(employee);
//     console.log("Total Salary:", totalSalary);
// }
// calculateSalary();
// console.log(salary); 


//--------------------------------------------------------------------------------


// function checkBalance() {

//     let balance = 25000;
//     let accountNumber = "12345";

//     console.log("Balance:", balance);
//     console.log("Account:", accountNumber);
// }

// checkBalance();

// console.log(balance); 


//--------------------------------------------------------------------------------


// function calculateElectricityBill() {

//     let units = 180;
//     let rate = 6;

//     let bill = units * rate;

//     console.log("Electricity Bill:", bill);
// }

// calculateElectricityBill();

// console.log(units); 


//---------------------------------------------------------------------------------


// let product = "Laptop";

// if (product === "Laptop") {

//     let discount = 10;
//     const message = "10% discount available";

//     console.log(product);
//     console.log(discount);
//     console.log(message);
// }

// console.log(product);  
// console.log(discount); 


//--------------------------------------------------------------------------------


// let employeePresent = true;

// if (employeePresent) {

//     let attendanceMessage = "Employee is Present";

//     console.log(attendanceMessage);
// }

// console.log(employeePresent);     
// console.log(attendanceMessage);    


//--------------------------------------------------------------------------------


// let products = ["Laptop", "Mobile", "Watch"];

// for (let i = 0; i < products.length; i++) {

//     console.log(products[i]);
// }

// console.log(products); 
// console.log(i);        


//---------------------------------------------------------------------------------


// //Mixed Example
// let company = "Amazon"; // Global Scope

// function employeeDetails() {

//     let employeeName = "Ravi"; // Function Scope

//     if (employeeName === "Ravi") {

//         let salary = 40000; // Block Scope

//         console.log(company);      
//         console.log(employeeName); 
//         console.log(salary);       
//     }

//     console.log(company);      
//     console.log(employeeName); 
//     // console.log(salary);    
// }

// employeeDetails();

// console.log(company);      
// // console.log(employeeName); 
// // console.log(salary);       


//--------------------------------------------------------------------------------

// Electricity bill

// const calculateBill = (units)=>{
//     let bill;
//     if(units<=100){
//         bill=units*2;
        
//     }

// }


//--------------------------------------------------------------------------------


//Bonus
// const calculateBonus =(salary)=>{
//     let bonus;
//     if(salary >= 30000){
//         bonus=salary*0.10;
//     }else{
//         bonus=salary*0.5;
//     }
//     console.log("Bonus:",bonus);
    
// }
// calculateBonus(40000);


//--------------------------------------------------------------------------------


// //Movie Ticket
// const ticketPrice =(age)=>{
//     let price;

//     if (age<12){
//         price =100;
//     }else{
//         price=200;
//     }
//     console.log("Ticket Price:",price);
    
// }
// ticketPrice(10)


//--------------------------------------------------------------------------------


//Bank Withdrawal
// const withdrawmoney =function(balance,amount){
//     if(amount<=balance){
//         balance=balance-amount;
//         console.log("Withdrawal successful");
//         console.log("Remaining balance:",balance);
//     }else{
//         console.log("Insufficient Balance");
        
//     }
// }
// withdrawmoney(10000,3000);


//--------------------------------------------------------------------------------


//Shopping Discount
// const calculateDiscount=function(amount){
//     let discount;
//     if(amount >=5000){
//         discount=amount*0.20;
//     }else{
//         discount=amount*0.10;
//     }
//     console.log("Discount:",discount);
    
// }
// calculateDiscount(6000);


//--------------------------------------------------------------------------------


// Student Result
// const checkResult=function(marks){
//     if(marks>=40){
//         console.log("Student Passed");
        
//     }else{
//         console.log("Student Failed");
        
//     }
// }
// checkResult(65);


//--------------------------------------------------------------------------------


// setTimeout(function(){
//     let username ="Ravi";
//     let password ="1234";

//     if(username=="Ravi"&& password ==="1234"){
//         console.log("Login succcessful");
        
//     }else{
//         console.log("Invalid Login");
        
//     }
     

// },1000);


// setTimeout(function(){
//     let orderStatus ="Ready";
//     if(orderStatus==="Ready"){
//         console.log("Your food is ready");
        
//     }else{
//         console.log("");
//     }
// },)


//--------------------------------------------------------------------------------


// Website button
// document.getElementById("buyButton").addEventListener("click",function(){
// let stock=5;
// if(stock=>0){
//     console.log("Product added to cart");
    
// }else{
//     console.log("Product is out of stock");
    
// }
// })
