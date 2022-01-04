// javascript-printPerson

/* Aufgabenstellung - Teil 1
Eine Funktion soll in der Konsole ausgeben, wie alt eine Person ist und welchen Beruf sie hat.
Beispiel: "John ist 20 Jahre alt und ein Student."
Schreibe dazu eine Funktion, die drei Parameter akzeptiert (Name, Alter, Beruf).
Die Funktion gibt anschließend den Namen, das Alter und den Beruf in einer Konsolenausgabe aus.*/

function myFunktion(name, alter, beruf){
console.log(name + " ist " + alter + " Jahre alt und ein " + beruf)
};

/* Aufgabenstellung - Teil 2
Teste deine Funktion.
Denke dir eine Person mit einem Alter und einem Beruf aus.*/
myFunktion("Hans", 33, "Tischler");
myFunktion("Alex", 21, "Profi Fußballer");
myFunktion("Goethe", 40, "Künstler");