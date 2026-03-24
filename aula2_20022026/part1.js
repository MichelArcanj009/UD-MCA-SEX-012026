let frutas = [
  'Maçã', 'Banana', 'Laranja', 'Uva', 'Manga',
  'Abacaxi', 'Pera', 'Melancia', 'Kiwi', 'Morango',
  'Cereja', 'Limão', 'Coco', 'Ameixa', 'Mamão',
  'Goiaba', 'Figo', 'Jabuticaba', 'Caqui', 'Maracujá'
];

console.log(frutas[0]);
console.log(frutas[7]);
console.log(frutas[11]);
console.log(frutas[15]);
console.log(frutas[18]);
console.log(frutas[20]);

console.log(frutas[frutas.length - 2]);
console.log(frutas[frutas.length - 1]);

console.log(frutas.length);

frutas.push("Pitaya");

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}