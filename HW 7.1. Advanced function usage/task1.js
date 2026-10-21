function handleNum (num, handleEven, handleOdd) {
    console.log(`num is: ${num}`);
    if (num % 2 === 0){
        handleEven();
    } else {
        handleOdd();
    }
}

function handleEven () {
    console.log('num is even');
}

function handleOdd () {
    console.log(`num is odd`);
}

handleNum(7, handleEven, handleOdd);