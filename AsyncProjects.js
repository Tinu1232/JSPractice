// 1. Create a pizza deliver function which sends delivered pizza  with settimeout as 2 seconds when resolved and sends Delivery failed when rejected.


// function orderPizza(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             let order = Math.random()<0.7;
//             if(order) res();
//             else rej();
//         }, 2000)
//     })
// }

// orderPizza().then(()=> console.log("Delivered")
// ).catch(()=> console.log("NOt Delivered")
// );

// Chained Promise : USers => Posts => Comments

//Task:
// 1. Create getUsers() -> resolves  with { id: 1, name: "Harsh"}
// 2. getPosts(userId) -> resolves with list of post titles
// 3. getComments(postId) -> resolves with comments
// Chain them together using .then() and log the final output

// function getUsers(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res({id:1, name:"Harsh"})
//         }, 2000)
//     })
// }
// function getPosts(userId){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res(["title1", "title2"])
//         }, 1000);
//     })
// }
// function getComments(postId){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             res(["Noiceeeeeeee", "nice"])
//         }, 1000);
//     })
// }

// getUsers()
// .then((data)=>{
//     console.log(data.name)
//     return getPosts(data.id)
// })
// .then((titles)=>{
//     console.log(titles)
//     return getComments(titles);
// })
// .then((id)=>{
//     console.log(id)
// })
// .finally(()=>{console.log("All comments resolved")});

/* Task 3
     Write a function fakeApiCall(endpoint) that:
     Accepts a string  like "user" or "posts"
     Resolves with some dumy data after a random delay (1-3 sec) 
*/

function fakeApiCall(endPoints){
    let time = Math.random()*3000;
    const obj ={
        users:["a", "adf", "wvf"],
        posts:["gd", "qewr", "Aerv"]
    }
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(console.log(obj[endPoints]))
            console.log(time);
        }, time)
    })
    let str = "sf";
}

fakeApiCall("users")
fakeApiCall("posts")