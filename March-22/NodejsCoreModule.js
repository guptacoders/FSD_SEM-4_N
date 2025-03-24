var ps = require("fs")

// ========== SYNCHRONUS (BLOCK MODE) ========

// ps.writeFileSync("a.txt","Neel") ---> Data Write But Overrideing Issue

// ps.appendFileSync("a.txt","Lj University")   --> Append Data

// var data = ps.readFileSync("a.txt","utf-8")
// console.log(data) --> Give Buffer data Format
// console.log(data.toString())  ---> Give Orignal Data

// ps.renameSync("a.txt","b.txt")  --> Rename File

// ps.unlinkSync("b.txt")  ---> Delete File

// ps.mkdirSync("Data")  ---> Create Folder
// ps.writeFileSync("Data/a.txt","Neel Patel")

// ps.unlinkSync("Data/a.txt")  ---> In Data Folder First Remove a.txt file then this folder is empty
// ps.rmdirSync("Data") ---> Remove Folder (only Remove Empty Folder)