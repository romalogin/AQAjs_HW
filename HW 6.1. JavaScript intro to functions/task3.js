function checkOrder (available, ordered) {
    let result;
    switch (true){
        case ordered === 0:
            result = "Your order is empty.";
            break;
        case ordered > available:
            result = "Your order is too large, we don’t have enough goods.";
            break;
        case ordered <= available:
            result = "Your order is accepted.";
            break;
    }
    return result;
}

console.log(checkOrder(9,0));