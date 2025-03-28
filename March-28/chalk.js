import ch from 'chalk'
// console.log("LJU")
// console.log(ch.red("Hello"))
// console.log("Good "+ch.blue("Morning"))

// console.log(ch.blue.bgYellow.bold("Hello World"))
// console.log(ch.blue("Hello","World","A","B"))
// console.log(ch.red("Hello",ch.red.underline.bgCyan("World"))+"!")
// console.log(ch.rgb(123,45,67).underline("Underlined Color"))
// console.log(ch.red.bgYellow("Neel patel"))

var error = ch.bold.red
var warning =ch.hex("#FFA500")

console.log(error("This is An Error"))
console.log(warning("This is An Warning"))