const fs = require('fs');

const jsonObject = { "name": "Neel Patel" };

fs.writeFileSync('task2.txt', JSON.stringify(jsonObject));
fs.writeFileSync("a.html","<h1>Neel Patel<h1>")

const data = fs.readFileSync('task2.txt', 'utf8');

const parsedData = JSON.parse(data);

console.log(parsedData.name);
