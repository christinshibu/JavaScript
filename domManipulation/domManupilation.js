// innerHtml -> it is used to get or change the Html content inside sn element,  including Html tags

// let h1=document.getElementById("heading")
// console.log(h1);
// console.dir(h1); // it gives object
// console.log(h1.innerHTML); // getting the data
// h1.innerHTML="hero venkit"; // adding new content (only text)
// console.log(h1.innerHTML);
// adding new content (text or tag)
// h1.innerHTML="Welcome to qspider <span>Hero abu</span>"
// console.log(h1);



//innerHtml and innetext

// let h1=document.getElementById("heading")
// console.log(h1.innerHTML); // returns content + html tags
// console.log(h1.innerText); // returns only content


// changing the content using innerHtml
// h1.innerHTML="alapuzha <i> don <i>"
// console.log(h1.innerHTML);

// changing content using innerText
// h1.innerText="alapuzha <i> don <i>"
// console.log(h1.innerText);


////////////////////////////////////////////////////////////////////////////////////////


// let div=document.getElementById("Box")
// console.log(div.innerText);
// it returns only visible content


// getting the content using textContent
// console.log(div.textContent);
// //changing content using textContent
// div.textContent="miss you machuuussssssss"

//it returns all the content including the hide content also

// let h1=document.getElementById("company")
// function victims(){
//     h1.innerText="Testyantra";
//     h1.style.color="Red";
    
// }

// let h1=document.getElementsByTagName("h1")
// console.log(h1[0]);
// h1[0].classList.add("x") //adding
// console.log(h1[0]);

// h1[0].classList.remove("x") //removing
// console.log(h1[0]);

// h1[0].classList.toggle("x") //toggle (if class is present it removes, if not 
//present it will add)
// console.log(h1[0]);

// function f1(){
//     let body=document.getElementsByTagName("body")
//     // console.log(body[0]);
//     body[0].classList.toggle("x")
// }


//create element and remove element

// let p=document.createElement("p")
// // console.log(p);
// p.innerText="Lunch Time";
// console.log(p);
// //INSERTING INSIDE THE BODY
// document.body.append(p,"m16 batch")
// document.body.appendChild(p,"m16 batch")


let div=document.getElementById("container")
let i=document.createElement("i")
i.innerText="Vimal Jyothi";
//INSERTING INSIDE THE DIV
div.append(i)
