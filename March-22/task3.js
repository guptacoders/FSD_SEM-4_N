// Write a node js script to write the text your are creating a file to help .txt file after that append the text you are appending the data to same txt file after that read the file and print file content on console.after finishing read operation print the line thanks for using program on console . write append , read sequence must be maintain all read write append operations are asyncronus.

var fs = require("fs")

fs.writeFile("help.txt","YOU ARE CRATING A FILE",function(){
    fs.appendFile("help.txt","YOU ARE APPENIDNG DATA",function(){
        fs.readFile("help.txt","utf-8",function(err,data){
            if(err)
            {
                console.log(err)
            }
            else{
                console.log(data)
                console.log("Thanks For Using Program")
            }
        })
    })
})