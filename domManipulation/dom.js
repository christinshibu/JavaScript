// Acessing Elements

//1. getElementBYID

// let h1=document.getElementById("company")
// console.log(h1);

// let p=document.getElementsByClassName("x")
// console.log(p);   //[p,p,p] 0 1 2
// console.log(p[0]);
// console.log(p[1]);
// console.log(p[2]);
// console.log(length);


// let btn=document.getElementsByTagName("Button")
// console.log(btn); //[b,b,b]
// let div=document.getElementsByTagName("Div")
// console.log(div);


// let h2= document.querySelector("h2")
// let h1 = document.querySelectorAll(".a")
// let h3 = document.querySelector("#head")
// console.log(h2);
// console.log(h1);
// console.log(h1[2]);

// let hw = document.querySelectorAll("h2")
// hw.forEach((ele,ind)=>{
//     console.log(ind);
//     console.log(ele);
    
    
// })

//-------------------------------------------------------------------------

// let img=document.getElementById("kalam")
// console.log(h1);
// console.log(h1.classList.contains("victims"));


// remove element
// let h1=document.getElementById("kalam")
// h1.remove()

// let img=document.getElementById("x")
// console.log(img);
// console.log(img.getAttribute("src"));
// img.setAttribute("alt","actor")
// img.removeAttribute("src")


//Inline Event Handling

// function f1(){
//     alert("Hello Guys.....")
// }


// //using dom event properties
// let btn=document.getElementById("btn")
// btn.onclick=function(){
//     alert("qspiders Jspiders")
// }

// //addevenrlistner()

// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     alert("Lunch Break")
// })


// mouse events(mouserOver,mouseOut)
// let div=document.getElementById("hen")
// div.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="Blue"
// })

// div.addEventListener("mouseout",()=>{
//     document.body.style.backgroundColor="Yellow"
// })

//user typing ui entry


// let input=document.getElementById("x")
// input.addEventListener("input",()=>{
//     console.log(input.value);
    
// })

// let input=documen.getElementById("x")
// input.addEventListener("change",()=>{
//     console.log(input.value);
    
// })

// let input=document.getElementById("x")
// input.addEventListener("input",()=>{
//     let p=document.getElementById("p")
//     p.innerText="User Typing:"+input.value;
    
// })

let input=document.getElementById("x")
let form=document.getElementById("myform")
form.addEventListener("submit",(event)=>{
    event.preventDefault()//it stops browser default behaviour(page reload)
    console.log(input.value);
    console.log("Form Submitted");
})