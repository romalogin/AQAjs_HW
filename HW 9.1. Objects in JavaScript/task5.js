const users = [
  { name: "Roman", age: 29, email: "test.gmail.com" },
  { name: "Stas", age: 35, email: "test2.gmail.com" },
  { name: "Andrii", age: 22, email: "test3.gmail.com" },
  { name: "Sasha", age: 40, email: "test4.gmail.com" },
];

for (const { name, age, email } of users) {
  console.log(`User: ${name}, ${age} years old, email: ${email}`);
}
