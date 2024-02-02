//console.log("Hii esha");
// create a javascript code to find which one is greater a, b,c
function Greatest(a, b, c) {
    if (a>=b && a>=c) {
        return a;
    } else if (b>=a && b>=c) {
        return b;
    } else {
        return c;
    }
}


const a = 10;
const b = 5;
const c = 8;

const greatest = Greatest(a, b, c);
console.log("The greatest number is:", greatest);
