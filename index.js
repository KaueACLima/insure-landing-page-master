var x = "";
var i = 0;
x = "0";

while (i < 10) {
    x += i;
    x = 10 - i + x;
    i++;
}

console.log(x);