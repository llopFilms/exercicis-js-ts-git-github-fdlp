const hola = "hola";
console.log(hola);

const numeros = [1, 2, 3, 4, 5, 6, 7];
const doblesnum = numeros.map((num) => num * 2);
console.log(doblesnum);
const doblesnumB = numeros.map((num, index, array) => {
  console.log(index);
  let item = num * 2;
  let item2 = item * 3;
  let arrayLength = array.length;
  let itemIndex = `Element ${index} de ${arrayLength}`;
  console.log(item, item2);
  return itemIndex + " - " + item2;
});
console.log(doblesnumB);

const filternum = doblesnum.filter((num) => num % 2 === 0 && num > 5);
console.log(filternum);

const doblenum2 = numeros
  .map((num) => num * 2)
  .filter((num) => num % 2 === 0 && num > 5);
console.log(doblenum2);
const sumdoblesnum2 = doblenum2.reduce((acum, previ) => acum + previ, 0);
console.log(sumdoblesnum2);
const sumfilternum = numeros
  .map((num) => num * 2)
  .filter((num) => num % 2 === 0 && num > 5)
  .reduce((acum, previ) => acum + previ, 0);
console.log(sumfilternum);
const sumfilternumB = numeros
  .map((num) => {
    let item = num * 2;
    console.log(item);
    return item;
  })
  .filter((num) => {
    let item = num % 2 === 0 && num > 5;
    console.log(item);
    return item;
  })
  .reduce((acum, previ) => {
    let item = acum + previ;
    console.log(item);
    return item;
  }, 0);
console.log(sumfilternumB);

const sumfilternum2 = numeros.reduce((acum, previ) => {
  const num = previ * 2;
  const parell = num % 2 === 0 && num > 5;
  if (parell) {
    return acum + num;
  } else {
    return acum;
  }
}, 0);
console.log(sumfilternum2);

const sumfilternum3 = numeros.reduce((acum, previ) => {
  const num = previ * 2;
  const parell = num % 2 === 0 && num > 5;
  return parell ? [...acum, num] : acum;
}, []);
console.log(sumfilternum3);
