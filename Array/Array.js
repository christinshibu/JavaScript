// syntax for array   
// let arrayname[]

// let students = ['lejin','anand','vivek']
// console.log(students[2]);
// console.log(students);

// let students = ["lejin","isha",'vivek',101,102,103,true,false,undefined]
// console.log(students);

// let prices = [ 10,["apple","grapes","mango"],481,];
// console.log(prices);
// console.log(prices[1][1]);
// console.log(prices[2]);


// let products = ["headphone",['laptop','keyboard',['mouse','charger'],'mobile'],'shoes'];
// console.log(products[0]);
// console.log(products[1]);
// console.log(products[2]);
// console.log(products[1]);
// console.log(products[1][2]);
// console.log(products[1][2][0]);
// console.log(products[1][2][0]);

// let trainer = ["danish","satya","sreemadhi"];
// console.log(trainer);
// trainer[1]="lejin";
// console.log(trainer);

// let students = ["lejin",'vivek','anand']
// console.log(students);
// students.push("adwaith")
// console.log(students);
// students.pop()
// console.log(students);



// let cart =["mouse"]
// cart.push("keyboard","webcam")
// console.log(cart);


// let notification =[];
// notification.push("New messages");
// console.log(notification);


// let cart =["phones","case","charger"]
// let rem=cart.pop()
// console.log(rem);

// let notification = ['login','payment','logout'];
// console.log(notification.pop());

// let actions = ["type","save","delete"]
// let lastAction = actions.pop();
// console.log(lastAction
    
// );


//unshift

// let items = ['watch','shoes','mobile']
// console.log(items);
// items.unshift(230);
// console.log(items);
// items.shift()
// console.log(items);

// let student1 ="Liya";
// let prices=[10,20,70,100];
// let res=prices.slice(1,4)
// console.log(res);

//Slice

// let prices=[10,30,40,70,100]
// let res=prices.slice(1,4)
// console.log(res);

//Splice - add,remove,replace

//splice(startIndex,delCount,item1,item2,...etc)

//Remove
// let fruits=["Apple","Mango","Orange","Grape"]
// console.log(fruits);
// fruits.splice(1,2)
// console.log(fruits);

//Add
// let fruits=["Apple","Mango","Orange","Grape"]
// fruits.splice(2,0,"Kiwi","Pineapple")
// console.log(fruits);

//Replace
// let fruits=["Apple","Mango","Orange","Grape"]
// fruits.splice(3,1,"BANANA")
// console.log(fruits);

//Reverse
// let vimalJyothi=["Aswathi","Rose","Anugraha","Aiswarya"]
// console.log("Before Reverse:",vimalJyothi);
// vimalJyothi.reverse()
// console.log("After reverse:",vimalJyothi);


// For Each
// let prices=[100,250,300,400,900]
// prices.forEach((ele,ind)=>{

//     console.log(ele);  //100,250,300,400,900
//     console.log(ind); //  0 , 1 , 2 , 3 , 4 
    
// })


//forEach method
// let names=["Arun","Anu","Vimal"];
// let result=names.forEach((ele)=>{
//     console.log(ele);
//     return "Hii"
// })
// console.log(result)//returns undefined because forEach method does not return anything


//map method
// let names=["Arun","Anu","Vimal"];
// let res=names.map((ele)=>{
//     return ele
// })
// console.log(res);


//example of map method

// let price = [100, 200, 300, 400, 500];
// let res = price.map((ele) => {
//     return ele + 50;
// })
// console.log("Returned result:", res);
// console.log("Original array:", price);


//example of map method

// let users = ["Arun", "Anu", "Vimal"];
// let res = users.map((ele) => {
//     return ele .toUpperCase()
// })
// console.log("Returned result:", res);
// console.log("Original array:", users);//returns the new array with modified values and original array remains unchanged



//filter method
// let price = [100, 200, 300, 400, 500];
// let res = price.filter((ele) => {
//     return ele > 300
// })
// console.log(res);



// example of filter method
// let names = ["Arun", "Anu", "Vimal", "Rahul"];
// let res = names.filter((ele) => {
//     return ele.startsWith("R")
// })
// console.log(res);//returns the elements that satisfy the condition

//find method
// let price = [100, 200, 300, 400, 500];
// let res = price.find((ele) => {
//     return ele > 300
// })
// console.log(res);//returns the first element that satisfies the condition
