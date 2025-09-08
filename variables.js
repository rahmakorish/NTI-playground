let inputElement= document.getElementById("input").value;
let z= document.getElementById("result").value;
let by=document.getElementsByTagNameNS("button").value;
let numbers=[];
let symbols=[];
 function calculate(e){
    let x= e.target.value;
    if (typeof x === "number"){
        numbers.push(x) ;
        console.log(x);
        // console.log(numbers);
    }
    else if (x === "+" || x === "-" || x === "*" || x === "/")
        {
        symbols.push(x);
        console.log(x);
        // console.log(symbols);
    }
    
 }
// num1 symbol num2 
//check input type
// if number keep it in container1
// if symbol enter if condition to do something
// if text keep it in container2

// while(1){
//    function calculate(e){
//         // e.target.value 
//         if (typeof e.target.value === "number"){
//             numbers.push(e.target.value) ;
//             console.log(numbers);
//         }
//         if (e.target.value === "+" || e.target.value === "-" || e.target.value === "*" || e.target.value === "/")
//             {
//             symbols.push(e.target.value);
//             console.log(symbols);
//         }
//         // if (typeof e.target.value === "number"){
//         //     let num2 = e.target.value;
//         //     console.log(num2);
//         // }
//     }
// }

// function checkInputType() {
//   const inputElement = document.getElementById("myInput");
//   if (inputElement.type === "text") {
//   } else if (inputElement.type === "number") {
//   }
// }

// checkInputType();


// let result=;
document.getElementById("result").innerHTML=result; document.getElementById("input").value;
