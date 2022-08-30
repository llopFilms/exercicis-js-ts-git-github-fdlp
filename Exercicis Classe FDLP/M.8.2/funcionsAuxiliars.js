// Funcions auxiliars de la meva llibreria
 
function obte (lloc) { 
 return document.getElementById(lloc).value;
}

function escriu (lloc, cosa) {
 document.getElementById(lloc).value=cosa; 
 document.getElementById(lloc).innerHTML=cosa;
}

function mostra (lloc) {
  document.getElementById(lloc).style.display="block";
}

function oculta (lloc) {
  document.getElementById(lloc).style.display="none";
}
 
 
