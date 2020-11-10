/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Carlos'; // Qualquer tipo de strings: '' "" ``
let idade: number = Ob1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Carlos'
}

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;