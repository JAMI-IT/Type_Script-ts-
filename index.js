"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let S1_Marks = 23;
let S2_Marks = 23;
let total;
//-------------------------------Sum of Two Variable 
let add = function (x, y) {
    total = S1_Marks + S2_Marks;
    console.log(total);
    return typeof (total);
};
console.log(add(S1_Marks, S2_Marks));
//-------------------------------Name of Students = ----------------------------
let Ful_name;
let Student = function (Fn, Ln) {
    Ful_name = Fn + Ln;
    console.log(Ful_name);
    return typeof (Ful_name);
};
console.log(Student("ABdul Rehman", " JAmi"));
var Studnt = {
    Fname: "Abdul Rehman",
    Lname: "Jami",
    age: 21,
    teacher: "Shahzaib"
};
var Teacher = {
    Fname: "Sir ",
    Lname: "Shahzaiab",
    age: 26,
};
console.log(Student);
console.log(Teacher);
