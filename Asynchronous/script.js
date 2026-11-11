//Synchronous code

// console.log("Start");
// for (let i=1;i<=100;i++){
//     console.log(i);
// }
// console.log("End");





//--------------------------------------------------------------------------





//Asynchronous code


// console.log("Start"); //Synchronous code

// setTimeout(()=>{
//     console.log("Hello Everyone!!");
// },5000)
// console.log("End"); //Synchronous code

//Working Procedure:
//First it executes line no. 22 the \n it enters inside setTimeout here it 
//schedules the callback function dor 5sec that means after 5sce it will execute
// the callback function.
//during this 5sec it will not block other code that means it will not block line
//no 27. It will continue execute line no. 27


// console.log("Welcome to AbhiBus"); //Synchronous code

// setTimeout(()=>{
//     console.log("Thank you for booking....");
//     console.log("Use ABHIRETURN Coupon to get 50% Discount");
// },7000)

// console.log("Your booking is in process..."); //Synchronous code


// console.log("Loading....");
// setTimeout(()=>{
//     console.log("Data loaded successfully");
// },3000)


//---------------------------------setInterval---------------------------------

// console.log("Start");
// setInterval(()=>{
//     console.log("This is Asynchronous code");
//     console.log("It will keep on execute after a delay time");
// },3000)
// console.log("End");


//Counter
// console.log("Timer Started");
// let count=0;
// setInterval(()=>{
//     count++;
//     console.log("Count down:",count);
// },1000)

//Clock
// console.log("This is Digital Clock");
// console.log(new Date()); //Complete date and time everything

// setInterval(()=>{
//     // console.log(new Date().toLocaleString()); //only date & time
//     // console.log(new Date().toLocaleTimeString()); //only time
//     console.log(new Date().toLocaleDateString);
    
// },1000)

// clearTimeout
// clearInterval
//Using these methods we can stop/remove the timeout and intervals

// console.log("Start");
// let id=setTimeout(()=>{
//     console.log("This is setTimeout");
// },2000)
// clearTimeout(id)
// console.log("Timer removed");

//counter
// let count=0;
// let id=setInterval(()=>{
//     count++;  //count=count+1
//     console.log("Count down",count); //1 //2 //3 //4 //5
//     if(count==5){
//         clearInterval(id)
//     }
// },1000)

//What is promise.?

//How to create a promise.?

// let payment=new Promise((resolve,reject)=>{
//     console.log("Payment Processing");
//     setTimeout(()=>{
//         let paymentStatus=true;
//         if(paymentStatus){
//             resolve("Payment sucessfull..! Order confirmed")
//         }
//         else{
//             reject("Payment failed..! Please try again")
//         }
//     })
// },3000)

// How to handle a promise.?

// payment.then((message)=>{
//     console.log(message);
// })

// .catch((reason)=>{
//     console.log(reason);
// })

// .finally(()=>{
//     console.log("Go back to main menu");
    
// })


// let foodOrder=new Promise((resolve,reject)=>{
//     console.log("Placing your food order...");
//     setTimeout(()=>{
//         let orderAccepted=false;
//         if(orderAccepted){
//             resolve("Your food order has been accepted")
//         }
//         else{
//             reject("Sorry! Your food order has been rejected")
//         }
//     })
// },3000)

// foodOrder.then((message)=>{
//     console.log(message);
// })

// .catch((error)=>{
//     console.log(error);
// })

// .finally(()=>{
//     console.log("Promise completed");
    
// })
//---------------------------------------------------------------

// async function handlePromise(){
//     try{
//         let result=await foodOrder
//         console.log(result);
//     }
//     catch(error){
//         console.log("Error",error);
//     }

// }
// handlePromise()


// let bus=new Promise((resolve,reject)=>{
//     console.log("Waiting for a bus");
//     setTimeout(()=>{
//         let busHasArrived=true;
//         if(busHasArrived){
//             resolve({
//                 travels:"Morning Star",
//                 busNo:"KL-03-AD-3103",
//                 status:"Arrived"
//             })
//         }
//         else{
//             reject("Bus Delayed") 
//         }
//     })
// },4000)

// bus.then((message)=>{
//     // console.log(message);  //{}
//     console.log(message.travels);
//     console.log(message.status);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Thank you for using Morning star Travels");
// })

//-----------------Another Way to handle the promise---------------------------


//async and await these are javascript features it makes asynchronous code
//to write and read

// async function handlePromise(){
//     try{                             //Here try and catch method used to 
//         let result= await bus;       //handle the error.
//         console.log(result);
//         console.log(result.busNo);
//     }
//     catch(error){
//         console.log("Error:",error);
//     }

// }
// handlePromise()




//----------------------------------------------------------------------------------

//What is JSON?
//JSON- Javascript Object Notation
//It is a format used to store or send the data between client(frontend) and 
//server(backend)

//Why we use JSON? --my own sentense
//When we fetch the data from the server it gives in json format so we 
//need to understand that need to convert.

// We have 2 methods
//1. JSON.stringify()-it converts javascript object to json.
//2. JSON.parse()-it converst json to javascript object

//Converting javascript object to json

let student={
    name:"Johan",
    isActive:true,
    hasGirlfriend:5
} 

let x=JSON.stringify(student)
console.log(x); //json data

//Converting json to javascript object

let result=JSON.parse(x)
console.log(result); //javascript object
console.log(result.hasGirlfriend);


