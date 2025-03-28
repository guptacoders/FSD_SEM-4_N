import val from "validator"
let email = "test@example.com"

console.log(val.isEmail(email))

let email1 = "test@"
console.log(val.isEmail(email1))

let name = "Hello"
console.log(val.isLowercase(name))

let a = " "
console.log(val.isEmpty(a))
