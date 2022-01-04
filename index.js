function dataBase (name, alter, beruf) {
    console.log(name, "ist " + alter, "alt und ein "  + beruf);
};
dataBase("John", "20 Jahre", "Student");
dataBase("Clarck", "64 Jahre", "IT Entwickler");
// Return function 
function dataBasereturn (name, old, beruf) { 

    return name + " ist " + old + " alt und ein "  + beruf;
}
let info = dataBasereturn ("John", "20 Jahre", "Student");
console.log(info);
let info2 = dataBasereturn("Clarck", "64 Jahre", "IT Entwickler");
console.log(info2);