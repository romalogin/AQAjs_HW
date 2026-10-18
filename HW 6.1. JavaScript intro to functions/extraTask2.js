function isEven (n) {
    let result;
    if (n % 2 === 0){
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(isEven(1));