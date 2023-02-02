let text = "Hello, World";
for(a = 1; a<151; ++a) {
console.log( text + ' ' +a);
} 

for(a = 1; a<21; ++a) {
    if (a%2==0)
    console.log(a);
    } 

const fs = require('fs');
function word(a){ }
a = fs.readFileSync('readme.txt', 'utf8');
if (a>0) console.log("Hello");
else console.log("olleH");


function word(a){ }
a = fs.readFileSync('readme2.txt', 'utf8');
if (a>0) console.log("Hello");
else console.log("olleH");


function word(a, b){ }
a = 5;
b = 5;
c = a * b;
fs.writeFileSync('answer4.txt', '' +c);

