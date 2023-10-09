let a=parseInt(prompt("Enter the number"))
let b=parseInt(prompt("Enter the divide number"))

document.write(`a= ${a} and b= ${b}<br><br>`)

let operation=(a,b,s)=>{
   
    s(a,b)
  
}

let sum=(a,b)=>{
   document.write(`a+b is = ${a+b}`) 
}
operation(a,b,sum)
