const person = {
  firstName: "Roman",
  lastName: "Login",
  age: 29,
};

person.email = "test@gmail.com";
delete person.age;

console.log(person);
