function sumConsecutiveNumbers() {
  const userInputFirst = document.getElementById("userInputFirstNumber").value;
  const userInputSecond = document.getElementById("userInputSecondNumber").value;
  const greaterNumber = Math.max(userInputFirst, userInputSecond);
  const smallerNumber = Math.min(userInputFirst, userInputSecond);

  let arrayOfNumbers = [];
  let sumOfAllNumbers = 0;

  for (let i = smallerNumber; i <= greaterNumber; i++) {
    arrayOfNumbers.push(i);
  }
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sumOfAllNumbers += arrayOfNumbers[i];
  }

  document.getElementById(
    "resultOfSum"
  ).innerHTML = `La suma de ${arrayOfNumbers} es: ${sumOfAllNumbers}`;
}

/* 
una altra manera de sumar 

sumOfAllNumbers = arrayOfNumbers.reduce(function(sum, arrayOfNumbers){
        const updatetsum = sum + arrayOfNumbers
        return updatetsum
    })

*/
