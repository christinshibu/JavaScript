// console.log(window);

// console.log(window.alert("Welcome to testyanthra Jail.."));


//--------------------------------------------------------------------------


// let salary=prompt("Enter your expected salary")
// console.log("My expected salary is:",salary);
// console.log(typeof salary);


//-------------------------------------------------------------------------


// let result=confirm("Are you sure you want to join the Jail")
// console.log("Students Response:",result);


//---------------------------------------------------------------------------


// let userName="Christin";
// let password="Secret";
// if(userName==="Christin" && password==="Secret"){
//     alert("Christin.. Login Successful")
// }
// else{
//     alert("Please enter valid Usename and Password")
// }




// let result=confirm("Are you sure you want to logout.?")
// if(result===true){
//     console.log("Logout Successful");
// }
// else{
//     console.log("Logout Failed");
// }




// let name=prompt("Enter your name")
// console.log("Username is:",name);




// let age=Number(prompt("Enter your age"));

// if (age >= 18){
//     alert("You are eligible!");
// }
// else{
//     alert("You are not eligible!");
// }


// let marks=prompt("Enter your mark:")

// if(marks>=35){
//     alert("Congratulations! You Passed");
// }
// else{
//     alert("Sorry! You Failed")
// }


// let age = Number(prompt("Enter your age"));

// if (age>=18){

//     alert("You can watch the movie!");
// }
// else{
//     alert("Sorry! You are not eligible");
// }



// let balance =5000;
// let amount=Number(prompt("Enter withdrawal amount"));

// if (amount<=balance){
//     balance=balance-amount;
//     alert("Withdrawal Successful!");
//     alert("Remaining Balance:"+ balance);  //----> comma or + it works
// }
// else{
//     alert("Insufficient Balance!");
// }



// let amount=Number(prompt("Enter your purchase amount"));

// if (amount >= 5000){
//     alert("Congratulations! You got a 20% discount.");
// }
// else if(amount >= 2000){
//     alert("Congratulations! You got a 10% discount.");
// }
// else{
//     alert("No discount available.");
// }


// let result=confirm("Are you sure you want to delete your account?");

// if(result){
//     alert("Account Deleted Successfully");
// }
// else{
//     alert("Account Deletion Cancelled!");
// }


// let product=prompt("Enter the product name");

// let result=confirm("Do you want to buy" + product + "?");

// if(result){
//     alert(product + "Order successfully!");
// }
// else{
//     alert("Order cancelled");
// }


 
let food=prompt("Enter food name");
let quantity=Number(prompt("Enter quantity"));

if(quantity>0){
    let result=confirm("Do You want to order" + quantity + " " + food + "?");

    if(result){
        alert("Your order for" + quantity + " " + food + "is confirmed!");
    }
    else{
        alert("Order cancelled!");
    }
}
else{
    alert("Please enter a valid quantity!");
}