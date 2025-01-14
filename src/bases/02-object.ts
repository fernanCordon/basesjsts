
export const persona = {
  cognomen: 'Stark',
  aetas: 45,
  ubiHabitat: {
    urbs: 'New York',
    zip: 3460,
    lat: 14.554098,
    lng: 34.600439
  }
} // as const;


const persona2 = structuredClone(persona);

persona2.cognomen = 'Parker';

persona2.ubiHabitat.urbs = 'Los Ángeles';

console.log(persona);
console.log(persona2);
