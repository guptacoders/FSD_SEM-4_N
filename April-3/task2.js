// write node js script and json to perform task as below
// 1) write this object {} in txt file named as two.txt 
// 2) read data from the same file and perfomr below task 
        // 1) addition of a & b
        // 2) substraction of second elemnt of c and b
        // 3) multiplication of elemnyts of c 
        // 4) at he output of addition substraction and multiplication of objects in s2.txt file 

var fs = require("fs")

var data = {d:{a:10,b:20,c:[30,10]}}
var data1 = JSON.stringify(data)

fs.writeFileSync("two.txt",data1)

var d = fs.readFileSync("two.txt",'utf-8')
var data = JSON.parse(d)

var add = data.d.a + data.d.b
console.log("Addition:",add)

var sub = data.d.c[1] - data.d.b
console.log("Substraction:",sub)

var mul = data.d.c[0] * data.d.c[1]
console.log("Multiplication:",mul)

fs.appendFileSync("two.txt","\n Addition:"+add.toString()+"\n")
fs.appendFileSync("two.txt","Substraction:"+sub.toString()+"\n")
fs.appendFileSync("two.txt","Multiplication:"+mul.toString()+"\n")