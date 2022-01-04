
/// Lösung mit object ///

function profile(name, alt, beruf) {
  let personProfie = {
    Name: name,
    alt: alt,
    Beruf: beruf,
  };
  console.table(personProfie);
}

profile("John", 20, "Student");



/// Zweite Lösung als function parameter ////
function person(name, alter, beruf) {
  console.log(name, "ist", alter, "Jahre alt und ein", beruf);
}



person("kawan", 34, "Web Developer");

