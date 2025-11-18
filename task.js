let num = [1,2,3,4,5,6]

let sum = num.reduce(function(acc, value){
    return acc+value;
}, 0)

console.log(sum);