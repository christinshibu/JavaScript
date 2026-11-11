// function travelling(a){  //-----> High Order function
//     console.log("Going Home..");
//     console.log(a);   //-----------> Here print the whole function
//     a() //---------> prints clg only 
    
// }

// function notification(){  //------->(Callback fn) notification fn depending 
//                                 //upon the travelling fn
//     console.log("Reached Home Successfully");
    
// }

// travelling(notification)


//--------------------------------------------------------------------


// function makePayment(x){
//     console.log("Payment is processing...");
//     console.log("Payment Successful");
//     // console.log(x);
//     x()    
// }

// function readyMessage(){
//     console.log("Your food order placed");
// }

// makePayment(readyMessage)


//---------------------------------------------------------------


// function ticketBooking(b){
//     console.log("Booking your movie ticket...");
//     a("Kalki",6)

// }

// function sendConfirmation(movie,time){
//     console.log("Ticket booked for",movie,
//         "is successful and the show time is",time);
    
// }

// ticketBooking(sendConfirmation)


//-----------------------------------------------------------------

// function fi(){
//     return "Hiiii"
// }
// let a=f1()
// console.log(a);


//----------------------------------------------------------------------------


// function mainBranch(){
//     console.log("Banglore is the main branch");
//     return function subBranch(){
//         console.log("Kochi is sub Branch");
//     }
// }
// let res=mainBranch()
// // console.log(res);
// res()

