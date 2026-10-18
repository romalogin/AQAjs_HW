// function declaration
function areaDeclaration (width, height) {
    return width * height;
}

console.log(areaDeclaration(10, 5));

//function expression

const areaExpression = function (width, height) {
    return width * height;
}

console.log(areaExpression(10, 6));

//function arrow

const areaArrow = (width, height) => width * height;

console.log(areaArrow(10, 7));