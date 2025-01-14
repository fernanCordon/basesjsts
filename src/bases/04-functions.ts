
const salutate = (nomen: string) => `Hola, ${ nomen }`;
  
const obtineUsoris = ( uid: string ) =>  ({
    uid,
    nomen: 'Tony001',
  })
console.log(salutate('Fernando'), obtineUsoris('aaa')); // Para que no salga el warning

const heroum = [
  {
    id: 1,
    nomen: 'Batman',
  },
  {
    id: 2,
    nomen: 'Superman',
    facultatem: 'Super fuerza',
  },
];

const heros = heroum.find( item => item.id === 2 );

console.log(heros?.facultatem?.toUpperCase());

export { }