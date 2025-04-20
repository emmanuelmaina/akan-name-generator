/*const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const gender = document.getElementById("gender");
const result = document.getElementById("result");

function generate() {
    if (month = 1 , 3, 5, 7, 8, 10, 12){
        day === 
    }
        
}
    */
const birthDate = document.getElementById("birthDate");
const gender = document.getElementById("gender");
const result = document.getElementById("result");


const form = document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()

    
     const birthDate = document.getElementById("birthDate").value;
     const [year, month, day] = birthDate.toString().split("-").map(Number)
    
     let CC = Math.floor(year / 100);
     let YY = year % 100;
     let MM = month;
     let DD = day;
     let d = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY) / 4) + ((26 * (MM + 1)) / 10) + DD) % 7);
     
     
     

} )
/*
console.log(d)
let form = document.getElementById("form");
const female = document.getElementById("female");
const gender = document.getElementById("gender");
const result = document.getElementById("result");
const birthdate = document.getElementById("birthdate").value;

function generate(birthdate) {
    
    const birthDate = document.getElementById("birthDate");
    const [year, month, day] = birthDate.split("-").map(Number)
    let CC = Math.floor(year / 100);
    let YY = year % 100;
    let MM = month;
    let DD = day;
    let d = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY) / 4) + ((26 * (MM + 1)) / 10) + DD) % 7);
    console.log(d)
    return d;
}


const birthdate = document.getElementById("birthdate").value;
const[year, month, day ]= birthdate.split("-").map(Number) 



const Female = document.getElementById("Female");
const Male = document.getElementById("Male");
const result = document.getElementById("result");

const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const FemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

*/