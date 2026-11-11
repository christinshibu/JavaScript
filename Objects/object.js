// let student = {
//     user:"Abhishek",
//     city:"Kannur",
//     course:"Python Fullstack",
//     isPlaced:false,
//     hasMarried:undefined,
//     hasGirlfriend:null,
//     hasgululu:5,
//     "@gmail":"abhi@gmail.com",
//     "Phone-number":2828283838,
//     101:1221212
// }
// console.log(student);
// console.log(student.user);
// console.log(student["user"]);
// console.log(student.course);
// console.log(student["isPlaced"]);
// console.log(student["@gmail"]);
// console.log(student["Phone-number"]);
// console.log(student[101]);



// let student2 = {
//     name:"Liya",
//     id:103,
//     skills:["Html","Css","Js",["Rose","Anu"],"Python","SQL"],
//     address : {
//         city:"Ernakulam",
//         pincode:"67899",
//         contact:108
//     }
// }

// console.log(student2.skills);
// console.log(student2.skills[3]);
// console.log(student2.skills[3][0]);
// console.log(student2.address);
// console.log(student2.address.city);
// console.log(student2.address.pincode);
// console.log(student2.address.contact);

// let product = {
//     productName : "Samsung Galaxy S25",
//     price : 74999,
//     brand : "Samsung",
//     inStock : true,
//     colors : ["Black","Blue","Silver"],
//     specifications : { 
//         ram : "12GB",
//         storage : "256GB",
//         display : "6.2 inch"
//     },
//     discount : 10,
//     rating : 4.5,
//     warranty : null,
//     deliveryDate : undefined,
//     category : "Mobile Phone"
// }
// console.log(product);
// console.log(product.productName);
// console.log(product.price);
// console.log(product.colors);
// console.log(product.specifications.display);
// console.log(product.specifications.ram);

//employee details
// let employee = {
//     employeeId : "TY212",
//     name : "Ramesh",
//     age : 25,
//     salary : 25000,
//     isActive : true,
//     skills : ["HTML","CSS","Javascript","React"],
//     experience : {
//         years : undefined,
//         company : "ABC technologies",
//         address :{
//             branch: "Kochi",
//             pincode: 653222
//         },
//         role : "Frontend developer",

//     },
//     married : false,
//     manager : null,
//     joiningDate : undefined,
//     location : "Hyderabad"
// };
// console.log(employee);
// console.log(employee.name);
// console.log(employee.salary);
// console.log(employee.skills);
// console.log(employee.experience.company);
// console.log(employee.experience.address.branch);


//order details
// let order = {
//     orderId : "ORD12344",
//     customerName : "Kiran",
//     amount : 2599,
//     paymentSuccesfull : true,
//     products : [
//         "T-shirt",
//         "Jeans",
//         "Shoes"
//     ],
//     deliveryAddress : {
//         houseNo : "12-45",
//         street : "Main road",
//         city : "Vijayawada",
//         pincode : 520001
//     },
//     couponApplied : false,
//     discountAmount : 200,
//     deliverycharge : 50,
//     "Tracking-Id" : null,
//     expectedDeliver : undefined,
//     "Payment-method" : "UPI"
// };
// console.log(order["Payment-method"]);
// console.log(order);
// console.log(order.orderId);
// console.log(order.amount);
// console.log(order.products);
// console.log(order.deliveryAddress.city);


// let vimalJyothiVictim={
//     victim:"Rose",
//     vId:101
// }

// console.log("Details of victim :",vimalJyothiVictim);
// console.log(vimalJyothiVictim.vId);
// console.log(vimalJyothiVictim["vId"]);

// vimalJyothiVictim.college="Vimal Jyothi"; //Adding Property
// console.log(vimalJyothiVictim);

// vimalJyothiVictim.vId=301; //Updating Property
// console.log(vimalJyothiVictim);

// delete vimalJyothiVictim.college;
// console.log(vimalJyothiVictim); //deleting Property

// delete vimalJyothiVictim;    ---> Once we created on object we cant directly dlt it 
                                    // instead we can give null to set.
// console.log(vimalJyothiVictim);

// vimalJyothiVictim=null;         
// console.log(vimalJyothiVictim);


//------Seal------------------------------------------------------------

// let product={
//     item:"Mobile",
//     price:750000
// }
// console.log("Before Seal",product);

// Object.seal(product)
// product.brand="Samsung Galaxy" //adding is not possible
// console.log(product);

// product.price=55000 //Update is possible
// console.log(product);

// delete product.price;
// console.log(product); //delete is not possible


//---------freeze--------------------------------------------------------------------------

// let product={
//     item:"Mobile",
//     price:750000
// }

// console.log("Before freeze",product);
// Object.freeze(product)

// product.brand="Samsung"; //adding is not possible
// console.log(product);

// product.price=4000; //Updating property is not possible
// console.log(product);

// delete product.item; //delete is not possible
// console.log(product);


// -------------------------------------------------------------------------------------

// let product={
//     item:"Mobile",
//     price:750000,
//     color:"Black",
//     brand:"Samsung",
//     battery:"6000mAh"
// }

// console.log(product.keys);
// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

//--------------------------------------------------------------------------------------




//map method --> Array

// let users=["Parvathy","Meenakshi","Liya","Rose"]
// let result=users.map((ele,ind)=>{
//     // console.log("Element",ele);
//     // console.log("Index",ind);
//     return ele
// })
// console.log("Result:",result);


// let prices=[20,40,60,80]
// let res=prices.map((ele,ind,arr)=>{
//     console.log(ele);

// })
// console.log(res); //it shows undefined it is not returning any values


//-----------------------------------------------------------------------------------------

// let students=["Rose","Navaneeth","Johan","Meenakshi","Basil"]
// for(let m of students){
//     console.log("Students Names:",m);
// }

// let prices=[35,999,870,4500]
// for(let x of prices){
//     console.log("Prices",x);
// }

// for(let x in prices){
//     console.log(x);    
// }

// let noice={
//     name:"FirstRowFirstBoy",
//     id:101,
//     course:"Javascript"
// }
// for(let n in noise){
//     // console.log(n);
//     // console.log(noise[n]);
//     console.log("Properties",":",noise[n]);    
// }

// let users=[
//     {
//         name:"User1",
//         id:101
//         },
//     {
//         name:"User2",
//         id:102
//         },
//     {
//         name:"User3",
//         id:103
//         },
//     {
//         name:"User4",
//         id:104
//         }]
// let result =users.map((ele)=>{
//     return ele.users
// })
// console.log(result);


// let data=[{
//     item:"Mobile",
//     price:35000,
//     details:{
//         brand:"Oppo",
//         color:"White"
//     }
// },{
//     item:"Laptop",
//     price:90000,
//     details:{
//         brand:"HP",
//         color:"grey"
//     }
// },{
//     item:"Keyboard",
//     price:2000,
//     details:{
//         brand:"Lenovo",
//         color:"Black"
//     }
// }]

// data.map((ele)=>{
//     // console.log(ele);
//     // console.log(ele.details.color);
//     // console.log(ele.details.brand);
//     console.log(ele.price);
    
// })

// let user=
// [{name:"Aparna",hobbies:["Coming","Struggling","Going","Thinking"],course:"Python"}
// ,{name:"Karthik",hobbies:["Sleeping","Calling to Gf","Eating"],course:"Java"},
// {name:"Parvathy",hobbies:["Immitating","Hiding everything"],course:"Sql"}]

// // user.map((ele)=>{
// //     console.log(ele.hobbies[3]);
// // })

// //Using return

// let result=user.map((ele)=>{
//     // console.log(ele.hobbies[3]);
//     return ele.hobbies[3]
// })

// console.log(result);

// let price=[35,45,999,455,300]    // off gives valuess of the array
// for(let x of price){
//     console.log("price",":",x);
// }

// for (let x in price){   // in shows index positioning
//     console.log(x);   
    
// }

// let noice={
//     name:"abinand H",
//     id:104,
//     course:"javascript"
// }
// for(let n in noice){
//     // console.log(n);
//     // console.log(noise[n]);
//     console.log("properties",":",noice[n]);
// }

// let prices=[20,40,550,30];
// let result=prices.map((ele,ind,arr)=>{
//     console.log(ele);
    
// })
// console.log(result); // it shows undefined  because it does not returning any values 




// let user=[{
//     name:"abu",
//     id:101
// },{
//     name:"abhi",
//     id:102
// },{
//     name:"abhiand",
//     id:104
// },{
//     name:"aby",
//     id:105
// },{
//     name:"unni",
//     id:106
// }]

// let result=user.map((ele)=>{
//     return ele.name;
//     // console.log(ele);
//     // console.log(ele.name);
    
    
// })
// console.log(result);



// let data=[{
//     item:"mobile",
//     price:50000,
//     details:{
//         brand:"OPPO",
//         color:"white"
//     }
// },
// {
//     item:"laptop",
//     price:90000,
//     details:{
//         brand:"hp",
//         color:"grey"
//     }
// },
// {
//     item:"keyword",
//     price:20000,
//     details:{
//         brand:"lenova",
//         color:"pink"
//     }
// }
// ]

// data.map((ele)=>{
//     // console.log(ele.details);
//     // console.log(ele.details.color);
//     // console.log(ele.details.brand);
//     console.log(ele.price);
// })




// let user=[{name:"arya",hobbies:["comming","struggling","going","thinking"],course:"B tech"},
// {name:"abhi",hobbies:["working","travelling","overthining","driving"],course:"full stack python"},
// {name:"ammu",hobbies:["working proffestional","overthinker","teacher","cooking"],course:"neet"}

// ]
// let result=user.map((ele)=>{
//     // console.log(ele.hobbies[3]);
//     return ele.hobbies[3]
    
// })
// console.log(result);



let product=[
    {
        id:1,
        name:"laptop",
        price:50000,
        category:{
            name:"electronics",
            department:"computer"
        },
        reviews:[
            {user:"ravi",rating:5},
            {user:"priya",rating:4}
        ]
    },

    {
        id:2,
        name:"mmouse",
        price:2300,
        category:{
            name:"iit",
            department:"mech"
        },
         reviews:[
            {user:"abu",rating:7},
            {user:"haa",rating:6}
        ]
    }
]

product.map((ele)=>{
    console.log(ele.reviews[1].rating);
    

})        


