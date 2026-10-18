function shortLongShort (a, b) {
    let newStr = "";
    if (a.length > b.length) {
        newStr = b + a + b;
    } else if (a.length < b.length) {
        newStr = a + b + a;
    } else {
        newStr = "The strings can not be the same length";
    }
    return newStr;
}

console.log(shortLongShort("abc","faster"));