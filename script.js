let media 
let array
let sum 

function arr() {
   sum = 0
   for (let i = 0; i < array.length; i++) {
    sum += array[i] 
   } 
   media = sum / array.length
}

array = [10,20,40,40]
arr()
console.log(media)
   