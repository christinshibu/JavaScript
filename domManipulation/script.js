// let section=document.createElement("section")
// let p=document.createElement("p")
// let span=document.createElement("span")

// p.innerText="Testyantra"
// span.innerText="Qspiders"
// section.append(p,span)
// console.log(section);

// document.body.append(section)

//------------------------------------------------------------------------------

                // Inline Event Handling
// (Writing the event directly inside the html element)
// Note: We cannot use same event multiple times

// function f1(){
//     console.log("Ticket Booked Successfully");
// }

// function f2(){
//     console.log("Payment Successful");
// }

//------------------------------------------------------------------------------

            // DOM Event Property
// Note: We cannot use same event multiple times.
// if you try to use, it takes only latest one.

// let btn=document.getElementById("btn")
// btn.onclick=function(){
//     console.log("Added to cart successfully");
// }

// btn.onclick=function(){
//     console.log("Item is not available");
// }

// btn.onclick=function(){
//     console.log("Using Dom event properties, it takes latest one");
// }

//------------------------------------------------------------------------------

                // addEventListener
// Note: We can use same event multiple times.
// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     console.log("Course Enrolled Successfully");
// })

// btn.addEventListener("click",()=>{
//     console.log("Please pay 35000 for course..");
// })

// btn.addEventListener("click",()=>{
//     console.log("Thank you for joining...");
// })

