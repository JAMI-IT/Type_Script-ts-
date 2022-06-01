import { stringify } from "querystring";

let S1_Marks:number= 23;
let S2_Marks:number=23;
let total:number;

//-------------------------------Sum of Two Variable 
let add =function(x:number,y:number)
{
    total=S1_Marks+S2_Marks;
    console.log(total);
    
    return typeof(total);
}
console.log(add(S1_Marks,S2_Marks));


//-------------------------------Name of Students =----------------------------

let Ful_name:string;

let Student=function(Fn:string,Ln:string)
{
    Ful_name=Fn+Ln;
    console.log(Ful_name);
    return typeof(Ful_name);
}
console.log(Student("ABdul Rehman"," JAmi"));



//----------------------------------objects -----------------------------------

interface person{
    Fname:string;
    Lname:string;
    age:number
    teacher?:string
}

var Studnt:person={
    Fname:"Abdul Rehman",
    Lname:"Jami",
    age:21,
    teacher:"Shahzaib"
}

var Teacher:person={
    Fname:"Sir ",
    Lname:"Shahzaiab",
    age:26,
}

console.log(Student);
console.log(Teacher);

