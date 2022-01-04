function printPerson(name, age, job) {
  console.log(name + " ist " + age + " Jahre alt und ein " + job + ".");
}

printPerson("Peter", 37, "Postbote");

// Bonus: Liste von mehreren Personen

// const personen = [
//   { name: "Peter", age: 47, job: "Postbote" },
//   { name: "Angela", age: 37, job: "Bankangestellte" },
// ];

// console.table(personen);

// Personen sortieren nach Alter

// personen.sort((a, b) => {
//   return a.age - b.age;
// });

// Jede Person ausgeben

// personen.forEach((person) => {
//   printPerson(person.name, person.age, person.job);
// });
