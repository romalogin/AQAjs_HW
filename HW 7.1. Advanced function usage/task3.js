function divide (numerator, denominator) {
    switch (true) {
        case typeof numerator === "string":
            throw new Error("Numerator is a string");
        case typeof denominator === "string":
            throw new Error("Denominator is a string");
        case denominator === 0:
            throw new Error("Division by zero is impossible");
        default:
            return numerator / denominator;
    }
}

try {
    const result = divide(10,5);
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const result = divide(10,"5");
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const result = divide("10",5);
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const result = divide(10,0);
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
}

finally {
    console.log ("Work is done");
}