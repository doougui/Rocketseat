import division, { soma as somaFunction, sub } from './funcoes';
// import * as funcoes from './funcoes'
import multFunction from './mult'; // Não precisa ter o mesmo nome que está no arquivo, já que é uma função default unica por arquivo

console.log(/*funcoes.*/somaFunction(1, 3));
console.log(/*funcoes.*/sub(4, 2));
console.log(/*funcoes.*/multFunction(7, 7));
console.log(/*funcoes.*/division(25, 5));