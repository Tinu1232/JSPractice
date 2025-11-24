//0-100 - 4.2
//101-200 - 6
//201-400 - 8
//>400 - 13

// 650 = 250 - 13, 200 - 8, 100 - 6, 100 - 4.2
// 3250, 1600

let electricityUnit = 1000
let bill=0;
let pending=0;
// switch(electricityUnit){
//     case (electricityUnit>400):
//          bill = (electricityUnit-400)*13; //3250
//         pending = (electricityUnit-400) //250
//         electricityUnit = electricityUnit-pending; //400
//         console.log(electricityUnit);
//     case (electricityUnit>201 && electricityUnit<=400):
//         console.log("2")
//         bill += (electricityUnit-200)* 8 // 4850
//         pending=(electricityUnit-200);
//         electricityUnit = electricityUnit-pending;
//         console.log("2")
//     case (electricityUnit>101 && electricityUnit<=200):
//         bill += (electricityUnit-100)*6
//         pending=(electricityUnit-100);
//         electricityUnit = electricityUnit-pending;
//         console.log("3")
//     case electricityUnit<=100:
//         bill+= electricityUnit*4.2

// }
while(electricityUnit>0){
    if(electricityUnit>400){
        bill = (electricityUnit-400)*13; //3250
        pending = (electricityUnit-400) //250
        electricityUnit = electricityUnit-pending; //400
        console.log(electricityUnit);
    }else if(electricityUnit>201 && electricityUnit<=400){
        console.log("2")
        bill += (electricityUnit-200)* 8 // 4850
        pending=(electricityUnit-200); //200
        electricityUnit = electricityUnit-pending;//200
        console.log("2")
    }else if(electricityUnit>101 && electricityUnit<=200){
        bill += (electricityUnit-100)*6
        pending=(electricityUnit-100); //100
        electricityUnit = electricityUnit-pending; //100
        console.log("3")
    }
    else{
        bill+= electricityUnit*4.2;
        electricityUnit = electricityUnit*0;
    }
}



console.log(`Your bill amount is ${bill}`);