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