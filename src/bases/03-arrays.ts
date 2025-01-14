
export const numeriArray = [1, 2, 3, 4, 5 ]; // as const;

numeriArray.push(6);


const numeriArray2: (number|string)[] = [ ...numeriArray ];


numeriArray2.push('7');


const numeriArray3 = numeriArray.map( valorem => {
  return (valorem * 2.374013).toFixed(1);
});


console.log({ numeriArray, numeriArray2, numeriArray3 });





