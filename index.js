
/// Lösung mit object ///

function profile(name, alt, beruf) {
  let personProfie = {
    Name: name,
    alt: alt,
    Beruf: beruf,
  };
  console.log(personProfie);
}

profile("John", 20, "Student");
person("kawan", 34, "Web Developer");
person("sprote", 40, "Web Developer");
person("Enza", 44, "Web Developer");




/// Zweite Lösung als function parameter ////
function person(name, alter, beruf) {
  return name, "ist", alter, "Jahre alt und ein", beruf;
}



let peSronen = person("kawan", 34, "Web Developer");

console.log(peSronen);


