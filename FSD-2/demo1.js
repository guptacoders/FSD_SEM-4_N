// var a = { emp: ["abc","pqr","xyz"]}
// console.log(a.emp[2])

// var b = { emp:{name:"abc",age:28}}
// console.log(b.emp.age)

// var data = '{"name":"ABC"}'
// console.log(data.name) 
// var data1 = JSON.parse(data)
// console.log(data1.name)

// var data = {name:"Neel patel"}
// console.log(data.name)
// var data1 = JSON.stringify(data)
// console.log(data1.name)

// MCQ - 1

// var user = {
//     name: "Neel patel",
//     age: 28,
//     course: ["FSD","PYTHON"],
//     address: ["T1","T2",{"T3":"Give Again"}]
// }
// console.log(user.address[2].T3)

// MCQ-2

// var sub = {
//     FSD:[
//         {
//             topic:"HTML",
//             course:"Advance Level",
//             content:{tags:"Table",form:"XYZ"}
//         },
//         {
//             topic:"CSS",
//             course:"Beginer Level",
//             content:["tags","table","form"]
//         }
//     ]
// }

// console.log(sub.FSD[0].content.tags)
// console.log(sub.FSD[1].content[0])


// write a Json string with date property and print that day in indian standered time (IST) format

// const obj = JSON.parse('{"name":"abc" , "age":"21" , "dob":"1997-03-18"}')

// obj2 = new Date(obj.dob)

// console.log(obj2)

// function printDate() {
//     const obj = JSON.parse('{"name":"abc" , "age":"21" ,  "dob":"1997-03-18"}')

//         obj2 = new Date(obj.dob)
//         console.log(obj2)
//         }
       
    

// write a function transform first and last that takes in an array and return an object with 
// 1) the first elemnt as the object key
//  2) last element of array as that key value

function transformFirstAndlast(array){
    var object = {}
    object[array[0]] = array[array.length - 1]
    return object
}
    var arraylist = ["abc","pqr","xyz","def"]
    console.log(transformFirstAndlast(arraylist))
