// this keyword for call apply bind

let basil={
    user:"Arjun",
    course:"Java",
    city:"Ernakulam",
    display:function showDetails(){
            console.log(this.course);
        
    }
}
basil.display()


let basi={
    user:"Arju",
    course:"Jav",
    city:"Ernakula",
    display:function showDetails(){
            console.log(this.course);
        
    }
}
basi.display()



let bas={
    user:"Arju",
    course:"Jav",
    city:"Ernakula",
    display:function showDetails(){
            console.log(this.course);
        
    }
}
bas.display()



// call(),apply() and bind() -->used to control the value of this inside a function
// call()--> it invokes/Executes the function immediately.
// we can specify which object the this keyword should refer to 
// inside the function.


let Liya={
    user:"Liya",
    course:"React",
    city:"Anonymous",

}

let basil2={
    user:"Basil",
    course:"Java",
    city:"Kochi",
}


let basil1={
    user1:"Basil",
    course1:"Java",
    city1:"Kochi",
}


function showDetails(trainer,age){
    console.log("User Name:",this.user);
    console.log("Course Name:",this.course);
    console.log("Favourite Trainer:",trainer);
    console.log("Age:",age);
    
    
    
    
}


showDetails.call(basil,"Sathya",22)
showDetails.call(Liya,"Sri mathi",undefined)
showDetails.call(adwaith,"Kalam",22)


showDetails.apply(basil,["Sathya",22])
showDetails.apply(Liya,["Sri mathi",undefined])
showDetails.apply(adwaith,["Kalam",22])


// Bind()-it will not execute function immediately.
// it return new function with specified object.
// bind()



let newFunction=showDetails.call(basil,"Sathya",22)
let newFunction3=showDetails.call(Liya,"Sri mathi",undefined)
let newFunction1=showDetails.call(adwaith,"Kalam",22)