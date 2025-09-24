function factorielle(n) {
  let resultat = 1;
  for (let i = n; i > 0; i--) {
    resultat *= i;
  }
  return resultat;
}

console.log(factorielle(num));