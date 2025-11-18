// create a mobile store which can take mobiles and remove mobiles from the inventory.

class inventory{
    constructor(){
        this.inventory = [];
    }

    addMobile(mobile){
        this.inventory.push(mobile)
    }
    addMobiles(...mobile){
        this.inventory.push(...mobile)
    }

    removeMobile(mobile){
        this.inventory.pop(mobile);
    }

    fullInventory(){
        this.inventory.forEach((mobile, index)=> console.log(`${index+1}) ${mobile.name} of company name ${mobile.brand}`))
        console.log(`Total count of inventory is ${this.inventory.length}`)
    }
}

class mobile{
    constructor(brand, name, price){
        this.brand = brand
        this.name=name
        this.price=price
        this.imei=Math.floor(Math.random()*1000000);
        this.sim=[]
    }
    insertSim(simCard){
        this.sim.push(simCard);
    }

    getMobileInfo(){
        console.log(`Mobile - ${this.brand} named ${this.name} available at price ${this.price} with imei number ${this.imei} and it has ${this.sim.length==0? 0: this.sim.length} simcard available`)
    }
}

class sim{
    constructor(brand, balance){
        this.brand=brand
        this.balance=balance
    }
    addBalance(balance){
        if(balance<0){
            console.log(`Please add balance greater than 0`)
            return
        }
        this.balance+=balance;
    }
}

let myInventory = new inventory();
let mobile1= new mobile("Redmi", "Note 10", 10000)
let mobile2= new mobile("OnePlus", "Node 1", 100000)
let jioCard= new sim("Jio", 300)
let airtelCard = new sim("Airtel", 400);
myInventory.addMobiles(mobile1, mobile2);
mobile1.insertSim(jioCard);
mobile2.insertSim(airtelCard)


class family{
    constructor(surname){
        this.family=[];
        this.surname=surname;
    }

    addMembers(...member){
        this.family.push(...member)
    }

    death(member){
        // this.family.pop(member)
        let count =0;
        let popOut;
        this.family.forEach((p)=>{
            if(p.name==member){
                popOut=p;
                return;
            }else{
                count++;
            }
        });
        if(count==this.family.length){
            console.log("there is no such familt member");
            return;
        }else{
            this.family.pop(popOut);
        }


    }
    memberInfo(person){
        let count=0;
        this.family.forEach((p)=> {
            if(p.name==person){
                console.log(`${person} is a member of the ${this.surname} family`);
            }else{
            count++;}
        })
        if(count==this.family.length){
            console.log(`${person} is not a member of the ${this.surname} family`)
        }
    }
    familyInfo(){
        console.log(`${this.surname} family has ${this.family.length} ${this.family.length>1?"members":"member"}`)
    }
}

class member{
    constructor(name, age, gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

let rajpurohitFamily = new family("Rajpurohit");
let father = new member("Bhopal Singh", 59, "Male")
let mother = new member("Sumitra", 49, "Female")
let son1 = new member("Vishal", 29, "Male")
let son2 = new member("Nilesh Kumar", 26, "Male");
rajpurohitFamily.addMembers(father, mother, son1, son2);








