//comment first and uncomment second string

const firstString = "Hello my name is Roman";
//const firstString = "HELLO MY NAME IN ROMAN";

let allUpperCase = true;

for (let i = 0; i < firstString.length; i++) {
  let letter = firstString[i];

  if (letter !== letter.toUpperCase()) {
    allUpperCase = false;
    break;
  }
}

console.log(allUpperCase);
console.log("---------");
