"use strict";

function mensch(name, alter, beruf) {
  return name + " ist " + alter + " Jahre alt und ist " + beruf;
}

let return1 = mensch("Metatron", 49, "Student");
let return2 = mensch("Eli", 32, "Lehrer");
let return3 = mensch("Harald", 65, "Maurer");

console.log(return1);
console.log(return2);
console.log(return3);

console.table(mensch);
