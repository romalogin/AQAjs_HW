function getObjectTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json(),
  );
}

function getObjectUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json(),
  );
}

let functionArray = [getObjectTodo(), getObjectUser()];
const allResult = Promise.all(functionArray);

allResult
  .then(console.log)
  .catch((error) => console.error("Error in request", error));

const raceResult = Promise.race(functionArray);

raceResult
  .then(console.log)
  .catch((error) => console.error("Error in request", error));
