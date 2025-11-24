
// function stepOne(cb){
//     console.log("Step 1")
//     cb();
// }
// function stepTwo(cb){
//     console.log("Step 2")
//     cb();
// }
// function stepThree(cb){
//     console.log("Step 3")
//     cb();
// }


// stepOne(()=>{
//     console.log("Done with first function")
//     stepTwo(()=>{
//         console.log("Done with step two");
//         stepThree(()=>{
//             console.log("Done with step 3");
            
//         })
//     })
// })

//promise use
// const promise = new Promise((resolve, reject)=>{
//     reject();
// })

// promise.then(()=>{
//     console.log("Resolved")
// }).catch(()=>{
//     console.log("Reject");
    
// })

// call back hell using promise

// function stepOne(){
//     console.log("Step 1")
//     return new Promise((res, rej)=>{
//         res();
//     })
// }
// function stepTwo(){
//     console.log("Step 2")
//     return new Promise((res, rej)=>{
//         res();
//     })
// }
// function stepThree(){
//     console.log("Step 3")
//     return new Promise((res, rej)=>{
//         res();
//     })
// }

// stepOne().then(stepTwo().then(stepThree().then(console.log(
// "Working fine")).catch("Not working")).catch("Not Working")).catch("not working")
