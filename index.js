

console.log("------------------------");
console.log("javascript-printPerson");

//aufgabe teil1

function person(name , age , occupation){
    console.log(name ,  "ist" , age , "Jahre alt und" ,  occupation + ".")
}
// aufgabe teil2
person('Birgitta' , 37 , "Kunstmalerin");
person('Andreas' , 58 , 'Programmierer');
person('Olaf' , 66 , 'Musiker');

console.log("----------NEU--------------");
console.log("VERWENDE EIN RETURN IN DER FUNCTION");

function person2(name, age, occupation) { 
    return name + " ist " + age + " Jahre alt und " + occupation + ".";} 
    
    let return1 = person2('Olaf', 66, 'Musiker');
    console.log(return1);
    let return2 = person2('Andreas' , 58 , 'Programmierer');
    console.log(return2);
    let return3 = person2('Marianne' , 23 , 'Sängerin');
    console.log(return3);