async function getObjectTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
}

async function getObjectUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  return data;
}

let functionArray = [getObjectTodo(), getObjectUser()];

async function allResult(array) {
  try {
    const allResult = await Promise.all(array);
    console.log(allResult);
  } catch (error) {
    console.log("Error in request: ", error);
  }
}

allResult(functionArray);

async function raceResult(array) {
  try {
    const raceResult = await Promise.race(array);
    console.log(raceResult);
  } catch (error) {
    console.log("Error in request: ", error);
  }
}

raceResult(functionArray);
