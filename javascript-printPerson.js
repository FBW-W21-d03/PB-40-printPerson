function person(name, age, beruf) {

    let person = {
        name: name,
        alter: age,
        beruf: beruf
    };

    console.log(person.name, "ist", person.alter, "Jahre alt und ein", person.beruf, ".");    

}

person("Joh", "30", "Web Developer");