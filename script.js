let add
let sum
let arr 

function arrs() {
     sum = 0
    for(let i = 0; i < arr.length; i++) {
    sum += arr[i]       
    }
    add = sum / arr.length
}

arr = [10,20,30,40] 
arrs()
console.log(add)

