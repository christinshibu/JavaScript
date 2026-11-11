// Strings - Sequence of characters used to represent text data.

const { use } = require("react");

// Using single quote(' ')

// let city='Kochi';
// console.log('Using single quote',city);

//---------------------------------------------------------------------------------

//Using double quote(" ")

// let state="Keralam"
// console.log("Using double quote",state);

//--------------------------------------------------------------------------------

//Combination of double and single quotes

// let message="It's javascript class"
// console.log(message); 

// let information='We have 2 days holidays for "Navaratri"'
// console.log(information);

//---------------------------------------------------------------------------------

// Using backtick(template literal) --> Used for multi line.

// let information=`We have 2 days holidays 
// for "Navaratri"`
// console.log(information);

//---------------------------------------------------------------------------------

//How to access string characters

// let name="Albert"; //---> index values 012345
// console.log(name);

// console.log(name[0]);  //accessing  -->  //A
// console.log(name[5]); //accessing   --> //t

// console.log(name[7]); //out of range ---> //Undefined

// name[0]="B" //changing using index positions(X)
// name="Blbert"; //Re-assigning(works)

// console.log(name);

//--------------------------------------------------------------------------------

//String-interpolation(` ${ } `) -->inserting variables or expressions inside string

// let name="Karthik";
// let age=23;

// // console.log("My name is",name,"and i am",age,"years old");
// console.log(`My name is ${name} and i am ${age} years old`);

// let a=10
// let b=20
// console.log(`sumof ${a} and ${b} is ${a+b}`);

//--------------------------------------------------------------------------------- 

// let password="Secret" //012345
// console.log(password.length);
// if (password.length>8){   //6>8
//     console.log("Valid Password");
// }
// else{
//     alert("Invalid format")
// }


// let user="kalam"
// user.toUpperCase() //methods returning new string but we are not storing 
                        // inside a varibale
// console.log(user); //kalam 


// let user="kalam";
// let result=user.toUpperCase() //storing in a new variable
// console.log(user);
// console.log(result);


// let user="kalam"
// console.log(user);
// user=user.toUpperCase() //storing in existing variable
// console.log(user);

// let theatre="PVR CINEMAS"
// theatre=theatre.toLowerCase()
// console.log(theatre);

//----------------------------------------------------------------------------------
//Trim

// let student="    CHRISTIN     "
// console.log(student.length);
// student=student.trimStart()
// student=student.trimEnd()
// student=student.trim()
// console.log(student.length);

//---------------------------------------------------------------------------------

// 1. E-commerce Product Details
//used when displaying product information such as product name and price

// let product="Laptop"
// let price=55000

// let message=`Product:${product}, price: ${price}`

// console.log(message);
// Product: Laptop, Price: 550000

//---------------------------------------------------------------------------------


//charAt --> if you don't pass any value it takes 0

// let user="Kalam" //01234
// let result=user.charAt(2)
// // let result=user.charAt(-4)
// console.log(user);
// console.log(result);

//indexOf

// let user="Kalam" //01234
// let a=user.indexOf("l")  //2
// let a=user.indexOf("M") //Kalam
// console.log(a);

// charCodeAt

// let user="KalamVenkat" //012345678910
// let a=user.charCodeAt(6)
// let a=user.charCodeAt(-1) //NaN --> Not a Number
// console.log(a);

//replace and replaceAll

// let message="i like icecream. icecream is tasty"
// // message=message.replace("icecream","chocolate") //i like chocolate. icecream is tasty
// message=message.replaceAll("icecream","chocolate") //i like chocolate. chocolate is tasty
// console.log(message);

//startsWith and endsWith

// let company="Wipro"
// // let res=company.startsWith("w") //false
// // let res=company.endsWith("o") //true
// console.log(res);

//padStart and padEnd

// let contact="9879"
// let notification=contact.padStart(10,"X")
// console.log("OTP sent to your mobile number ends with:",notification); //XXXXXX9879


// let notification=contact.padEnd(10,"X")
// console.log("OTP sent to your mobile number ends with:",notification); //9879XXXXXX

//concat() - it is used to join two or more strings and return a "new string".
// it does not change original string
// it retruns a new combined string
// works same as + operator only
// now a days we are using + operator only

// let first="Hello"
// let second="World"
// // let newString=first.concat(" ",second)
// console.log(newString); //using concat method
// console.log(first+" "+second); //using + operator
// console.log(newString);
// console.log(first);
// console.log(second);

//---------------------------------------------------------------------------------

// 1. Length

// Use Find the number of character

// Example 1

// function checkPassword(password){ //password --> Parameter
//     if (password.length>=8){
//         return "Password is strong";
//     }
//     else{
//         return "Password must contain at least 8 characters"
//     }
// }
// console.log(checkPassword("Java@1234")); //Java@1234 --> Argument

//---------------------------------------------------------------------------------

// function checkUsername(username){
//     if (username.length <=15){
//         return "Username accepted"
//     }
//     else{
//         return "Username is too long"
//     }
// }
// console.log(checkUsername("kalamreddy"));

//---------------------------------------------------------------------------------

// Use: Convert text to uppercase
// Example 1:

// function checkCoupon(coupon){
//     if (coupon.toUpperCase()==="SAVE20"){
//         return "Coupon applied successfully";
//     }
//     else{
//         return "Invalid Coupon";
//     }
// }
// console.log(checkCoupon("save20"));

// Example 2:

// function checkCity(city){
//     if (city.toUpperCase()==="HYDERABAD"){
//         return "Delivery available"
//     }
//     else{
//         return "Check another city"
//     }
// }
// console.log(checkCity("hyderabad"));

// 3. toLowerCase()
// Use: Convert text to lowercase
// Example 1

// function checkEmail(email){
//     if (email.toLowerCase() === "admin@gmail.com"){
//         return "Admin login"
//     }
//     else{
//         return "User login"
//     }
// }
// console.log(checkEmail("ADMIN@GMAIL.COM"));

//Example 2

// function checkRole(role){
//     if(role.toLowerCase()==="trainer"){
//         return "Trainer dashboard"
//     }
//     else{
//         return "Student dashboard"
//     }
// }
// console.log(checkRole("TRAINER"));

//4. trim()
// Use: Remove spaces from beginning and end
// Example 1

// function login(username){
//     username=username.trim()
//     if(username==="kalam"){
//         return "Login Successful"
//     }
//     else{
//         return "Invalid Username"
//     }
// }
// console.log(login("  kalam  "));

//Example 2

// function searchProduct(product){
//     product=product.trim();
//     if (product==="laptop"){
//         return "Laptop found"
//     }
//     else{
//         return "Product not found"
//     }
// }
// console.log(searchProduct(" laptop "));

// 5. includes()
// Use: Check whether a string contains specific text
// Example 1

// function checkMessage(message){
//     if (message.toLowerCase().includes("urgent")){
//         return "Show urgent notification"
//     }
//     else{
//         return "Normal notification"
//     }
// }
// console.log(checkMessage("This is an urgent message"));

//Example 2

// function checkEmail(email){
// if (email.includes("@")){
//     return "Valid email format"
// }
// else{
//     return "Invalid email format"
// }
// }
// console.log(checkEmail("student@gmail.com"));

// 6. startsWith()
// Use: Check whether a string starts with specific text
// // Example 1

// function checkFile(fileName){
//     if (fileName.startsWith("IMG")){
//         return "This is an image file"
//     }
//     else{
//         return "Unknown file"
//     }
// }
// console.log(checkFile("IMG_1024.jpg"));

// Example 2

// function checkURL(url){
//     if (url.startsWith("https://")){
//         return "Secure website"
//     }
//     else{
//         return "Not a secure URL"
//     }
// }
// console.log(checkURL("https://example.com"));

// 7. endsWith()
// Use: Check whether a string ends with specific task
// Example 1

// function checkFile(fileName){
//     if (fileName.endsWith(".pdf")){
//         return "PDF document"
//     }
//     else{
//         return "Other file type"
//     }
// }
// console.log(checkFile("resume.pdf"));

// Example 2

// function checkEmail(email){
//     if (email.endsWith("@gmail.com")){
//         return "Gmail Account"
//     }
//     else{
//         return "Other email provider"
//     }
// }
// console.log(checkEmail("student@gmail.com"));

// 10. charAt()
// Use: Get the character at a particular index.
// Example 1

// function checkFirstLetter(name){
//     let first=name.charAt(0);
//     if (first.toUpperCase()==="K"){
//         return "Name starts with K"
//     }
//     else{
//         return "Different starting letter"
//     }
// }
// console.log(checkFirstLetter("Kalam"));

//Example 2

// function checkOTP(otp){
//  let firstDigit=otp.charAt(0);
//  if (firstDigit==="9"){
//     return "OTP starts with 9"
//  }
//  else{
//     return "OTP starts with another digit"
//  }
// }
// console.log("912345");

// 14. replace()
// Use: Replace the first matching text
// // Example 1

// function formatMessage(message){
//     let result = message.replace("Hello","Hi")
//     if (result !== message){
//         return result;
//     }
//     else{
//         return "Word not found"
//     }
// }
// console.log(formatMessage("Hello students"));

// Example 2
// function updatePrice(text){
//     let result=text.replace("500","450")
//     if (result !== text){
//         return 'Discounted Price:'+updatePrice;
//     }
//     else{
//         return "Price unchanged"
//     }
// }
// console.log(updatePrice("Product price is 500"));

// 15. replaceAll()
// Use: Replace all occurrences of matching text
// Example 1

// function cleanMessage(message){
//     let result=message.replaceAll("bad","***");
//     if (result !== message){
//         return result
//     }
//     else{
//         return "No unwanted word found"
//     }
// }
// console.log(cleanMessage("Bad word, bad comment"));

//Example 2
// function updateCity(text){
//     let result=text.replaceAll("Hyd","Hyderabad")
// }


//Slice -->slice(startIndex,endIndex) -->EndIndex is not include

// 4,1 (slice)
// 4>1(if start index is greater than end undex it gives empty string)

// let trainer="KALAM"
// let a=trainer.slice(0,3) //KAL
// let a=trainer.slice(0)  //KALAM
// let a=trainer.slice(2) //LAM
// let a=trainer.slice(3,2) //empty(no output) because it is moving right to left

// let a=trainer.slice(-3,-1)
// let a=trainer.slice(-3)
// let a=trainer.slice(-2,-5)

// console.log(a);

// Substring
// 4,1(substring if start index is greater than end undex it swap)
// 4>1(swap(1 4))

// let trainer="KALAM" //01234
// let a=trainer.substring(1,4)
// let a=trainer.substring(4,2)
// let a=trainer.substring(-3) //values become 0
// console.log(a);


//split --> it converts normal string to array

// let date="25-09-2026"
// let a=date.split("-")
// console.log(a);

// let email="ramireddykalam@gmail.com"
// let b=email.split("@")
// console.log(b);

// let user="Venkat"
// let c=user.split("")
// let d=user.split(" ")

// console.log(c);
// console.log(d);

