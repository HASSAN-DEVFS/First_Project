function factorielle(n) {
  let resultat = 1;
  for (let i = n; i > 0; i--) {
    resultat *= i;
  }
  return resultat;
}

console.log(factorielle(num));



var num = 123542;

function compterChiffres(n) {
  let compteur = 0;
  let nombre = Math.abs(n); 
  if (nombre === 0) return 1; 
  
  while (nombre > 0) {
    nombre = Math.floor(nombre / 10); 
    compteur++;
  }
  return compteur;
}

console.log(compterChiffres(num)); 
