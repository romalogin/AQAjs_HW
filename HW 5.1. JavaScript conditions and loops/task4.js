//For several numbers
// Added this just for practice =) I know it won't affect my grade, but I'd really appreciate a few comments!
// First, I had a problem declaring the "secondNumber" variable outside the while loop :)

console.log("------------------For------------------");

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("----------------------");
}

console.log("------------------While------------------");

let firstNumber = 1;

while (firstNumber <= 10) {
  let secondNumber = 1;

  while (secondNumber <= 10) {
    console.log(
      `${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}`,
    );
    secondNumber++;
  }
  firstNumber++;
  console.log("-----------------------------------------------");
}
