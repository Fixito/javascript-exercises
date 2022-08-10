const fibonacci = (num) => {
  if (num < 0) {
    return 'OOPS';
  }

  let n1 = 0;
  let n2 = 1;
  let somme = 0;

  for (let i = 2; i <= num; i++) {
    //somme des deux derniers nombres
    somme = n1 + n2;
    //assigner la dernière valeur à la première
    n1 = n2;
    //attribuer la somme au dernier
    n2 = somme;
  }

  return num ? n2 : n1;
};

// Do not edit below this line
module.exports = fibonacci;
