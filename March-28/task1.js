// write a node js script to create own module to calculate reverse of a given number that module should be used to check given number of which square of reverse and reverse of square is same.

function reversenum(num){
    let rev=0
    while(num>0){
        
        rev=rev*10+(num%10);
        num=parseInt(num/10);
        }
        return rev;
        }

function square(num){ return num*num; }

function checknum(num)
    {
        a=square(num) //a=144
        b=square(reversenum(num)) //b=441
        if(a==reversenum(b))
         { console.log("Equal") }
        else
        { console.log("Not equal") }
    }

module.exports.reversenum = reversenum
module.exports.square = square
module.exports.checknum=checknum
