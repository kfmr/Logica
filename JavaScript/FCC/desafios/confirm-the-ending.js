function confirmEnding(str, target) {
  /* slice "fatia" a parte da string 
  dentro da função retorna a parte da string que é do mesmo tamanho que a target
em seguida compara se o retorno é igual ao target
  */
  return str.slice(str.length - target.length) === target;
}


confirmEnding("Bastian", "n");