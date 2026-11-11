//website:fakestoreapi.com

// let promise1=fetch("https://fakestoreapi.com/users")
// // console.log(promise1); //promise object
// promise1.then((response)=>{
//     // console.log(response); //response object
//     let promise2= response.json()
//     // console.log(promise2); //again promise object
//     promise2.then((value)=>{
//         // console.log(value); //actual data [{},{},.......]
//         console.log(value[1]); //giving 2 element {}
//         console.log(value[1].username);
//         console.log(value[1].email);
//         console.log(value[1].name); //name object {}
//         console.log(value[1].name.firstname);
//     })
// })
// .catch((reason)=>{
//     console.log(reason);
// })



// let promise1=fetch("https://fakestoreapi.com/products")
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         // console.log(value);
//         value.forEach((ele)=>{
//             // console.log(ele); //giving 20 objects {}
//             console.log("Product id:",ele.id);
//             console.log("Category:",ele.category);
//             console.log("Price",ele.price);
//             // console.log(ele.rating); //rating object{}
//             console.log("Rating",ele.rate);
//         })
//     })
// })
// .catch((reason)=>{
//     console.log(reason);
// })



// let promise1=fetch("https://fakestoreapi.com/carts")
// // console.log(promise1);
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);
//         value.forEach((ele)=>{
//             console.log("User Id:",ele.userId);
//             console.log("Product Id:",ele.products.productId);
//             console.log("Quantity:",ele.products.quantity);
            
//         })
//     })
// })
// .catch((reason)=>{
//     console.log(reason);
// })


//Sending new data -------------POST---------------

//Website:jsonplaceholder

// let promise1=fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"Liya",
//         course:"React"
//     })
// })
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);        
//     })
// })

// .catch((error)=>{
//     console.log(error);
// })


//Updating the existing data ------------PUT------------------

// let promise1=fetch("https://jsonplaceholder.typicode.com/posts/4",{
//     method:"PUT",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"Kochi Students",
//         course:"Javascript is going to end"
//     })
// })
// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);        
//     })
// })

// .catch((error)=>{
//     console.log(error);
// })

//Deleting existing data ---------------DELETE--------------------

// let promise1=fetch("https://jsonplaceholder.typicode.com/posts/5",{
//     method:"DELETE",
// })

// promise1.then((response)=>{
//     let promise2=response.json()
//     promise2.then((value)=>{
//         console.log(value);        
//     })
// })

// .catch((error)=>{
//     console.log(error);
// })

//-------------------------------------------------------------------------

let promise1=fetch("https://api.tvmaze.com/singlesearch/shows?q=girls")

// console.log(promise1);
promise1.then((response)=>{
    let promise2=response.json()
    promise2.then((value)=>{
            console.log("Type:",value.type);
            console.log("Status:",value.status);
            console.log("Time:",value.schedule.time);
            console.log("Days:",value.schedule.days);
    })
})
.catch((reason)=>{
    console.log(reason);
})
