let body = document.body;
// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector("#formulaire");

// Etape 2 - Cacher l'erreur
let hideMessage =()=>(error.style.display='none') ;
hideMessage();
let montrerMessage =()=>(error.style.display='inline');
// Etape 3 - Générer un nombre aléatoire
let nbrAleatoire = Math.floor(Math.random()*1001);
let coups =0;
let nbrChoisi;
// Etape 6 - Créer la fonction vérifier
const verifier=(nbr)=>{
let instruction = document.createElement('div');
if(nbr>nbrAleatoire){
    instruction.className= 'instruction plus';
    instruction.textContent = `#${coups} (${nbr}) C'est plus !`;
} else if(nbr< nbrAleatoire){
    instruction.className= 'instruction moins';
 
    instruction.textContent = `#${coups} (${nbr})C'est moins !`;
}else{
    instruction.className= 'instruction fini';
    instruction.textContent = `#${coups} (${nbr}) Félécitation vous avez trouvé le juste prix !`;
    input.dsabled = true;
}

document.querySelector('#instructions').prepend(instruction);

}
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// let pattern = /\d+([.,]\d+)?/;
// let maRegex = new RegExp(pattern);
const messageErr=(e)=>{
let value = e.key;
isNaN(value)?montrerMessage():hideMessage();
// !maRegex.test(value)?montrerMessage():hideMessage();

};
input.addEventListener("keyup",messageErr);
// Etape 5 - Agir à l'envoi du formulaire
const submitForm =(e)=>{
e.preventDefault();
if(isNaN(input.value) || input.value ==""){
input.style.borderColor="red";
}else{
    coups++;
    input.style.borderColor="silver";
     nbrChoisi = input.value;
     input.value = '';
     console.log("nbrChoisi =>",nbrChoisi);
     verifier(nbrChoisi);
}

};
formulaire.addEventListener("submit",submitForm);
// console.log("input",input);
// console.log("formulaire",formulaire);
// console.log("error",error);