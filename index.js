"use strict";

function mensch(name, alter, beruf) {
  return "ist" + alter + "Jahre alt und ist" + beruf.length;
}

let return1 = mensch("Metatron", 49, "Student");
let return2 = mensch("Eli", 32, "Lehrer");
let return3 = mensch("Harald", 65, "Maurer");

console.table(mensch);
