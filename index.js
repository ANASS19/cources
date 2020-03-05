/* (function(a, b) {
    console.log("voila les parametre: ", a, b)
})(4, 6); */
/* function showmsg() {
    alert('est une premire function');
}
showmsg(); */
/* var msg1 = "message globale";

function showmsg() {
    var msg2 = "message locale";
    msg3 = "un autre message";
    alert(msg1);
    alert(msg2);
    alert(msg3);

}
showmsg();
alert(msg1);
alert(msg2);
alert(msg3); */
/* function somme(a, b) {
    if ((typeof a === 'undifined') || (typeof b === 'undfined')) {
        alert("besoin de ddeux arguments");
        return NaN
    }
    return parseInt(a) + parseInt(b)
}
console.log(somme(100, 100)) */
var e1 = {
    nom: "aa",
    prenom: "bbb",
    age: 13,
};

function Etudiant(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.notes = [];
    this.ajoutenote = function(note) {

    }
    this.calculemoyanne = function(a, b) {
        var s = a + b
        return s;
    }
}
var e1 = new Etudiant("aitali", "ali", 19);
var e2 = new Etudiant("bahra", "reda", 18);
console.log("e1", e1);
console.log("e2", e2);
e1.ajoutenote(16);
e1.ajoutenote(15);
console.log("e1", e1);
console.log("e2", e2);
var me1 = e1.calculemoyanne(notes[0], note[1]);
var me2 = e2.calculemoyanne();
console.log("moy e1", me1);
console.log("moy e2", me2);