// object destructuring 

// let details=["kochi",98367,["haa","eee","jaaa"]];
// let[a,b,[x,y,z]]=details;
// console.log("what is fav words:",y);

// let details=["Kochi",987654,["Amaresh","Sathya","Dhanish"]]
// let [a,b,[x,y,z]]=details;
// console.log("Abhishek favourite trainer:",y);

//SKIPPING VALUE
// let numbers=[1,2,3,4,5,6]
// let[first,second,third,,fifth,sixth]=numbers
// console.log(fifth);

//Error --> Because accessing the variable
// let trainers=["Amaresh",["Dhanish","Sathya","Kalam"],"Nivedhitha"]
// let[a,[trainer1,trainer2,,],c]=trainers
// console.log(trainer2);
// console.log(trainer3);
// console.log("Bye","Bye");

//Undefined --> Because accessing the value
// let trainers=["Amaresh",["Dhanish","Sathya"],"Nivedhitha"]
// let[a,[trainer1,trainer2,,],c]=trainers
// console.log(trainer2);
// console.log(trainer3);
// console.log("Bye","Bye");

// let random=["Parvathi","Aparna",["Basil","Vasudev",["Rose","Anugraha"],"Liya"]]
// let [a,b,[c,,[,d],e]]=random;
// console.log(d);

// let user={
//     actor:"Karthik",
//     city:"Kottayam",
//     noOfMovies:0,
//     details:{
//         upComingMovie:undefined,
//         actress:"Anonymous",
//         skills:["Calling","Story Telling"]
//     }
// }

// let{actor,city,noOfMovies,details:{upComingMovie,actress,skills:[a,b]}}=user

// console.log(upComingMovie);
// console.log(noOfMovies);
// console.log(skills);
// console.log(details);


// let user={
//     actor:"Karthik",
//     city:"Kottayam",
//     noOfMovies:0,
//     details:{
//         upComingMovie:undefined,
//         actress:"Anonymous",
//         skills:["Calling",{branch:"Kochi",course:"Java",feeDetails:["Incubation","Dying"]},"Story Telling"]
//     }
// }


// let{actor,city,noOfMovies,details:{upComingMovie,actress,skills:[a,
//                                     {branch,course,feeDetails:[b,c]},d]}}=user

// console.log(a);
// console.log(c);
// console.log(d);

