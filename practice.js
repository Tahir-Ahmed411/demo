let obj={
    name:"Someone",
    data:{
        phone:12314,
        add:"adfadaf"
    }
}

let {name,data}=obj
let {phone:phoneNumber,add}=data
// console.log(name,phoneNumber,add)

function add1(...b){
    let [a,c,...d]=b
    console.log(...d)
}

// add1(1,2,3,4,6)

// for in vs for of 
//  for in works on objects and gets keys of it
// let obj1={name:"Tahir Ahmed",age:21,Dep:"CS"}
// for (const key in obj1) {
    //     // if (Object.hasOwnProperty.call(object, key)) {
//         // const element = object[key];
//         console.log(key)        
//     // }
// }
// b=[1,2,3,4,5]
// // for of works on those DS which are iterable
// for (const iterator of b) {
    //     console.log(iterator)
    // }
    
let name1="Tahir"
let obj1={[name1]:"Ahmed",age:21,Dep:"CS"} // computed property
// console.log(obj1)

// Enhanced Object Literals assign direct variable cnosidered as key value
let student="Tahir Ahmed"
let dept="CS"
let ob={student,dept} // Enhanced Object Literals assign direct variable cnosidered as key value
// console.log(ob)

// reduce function as higher order function
// const arrayOfNumbers = [1, 2, 3, 4];
 
// const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
//   return accumulator + currentValue;
// },10); // 2nd argument as initial value of accumulator
 
// console.log(sum); // 10


async function outer(a){
    let data=await (await fetch("http://www.maciejtreder.com/asynchronous-javascript/directors/")).json()
    console.log(data)
}

let inr=outer(3)
inr()