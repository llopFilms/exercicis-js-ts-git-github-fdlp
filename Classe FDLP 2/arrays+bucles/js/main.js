console.log('Avís --> Main carregat correctament');

function resoldreEx1() {

  let arr0a50 = [];
  let missatgeArr0a50 = 'Llista 0 a 49:';
  let arr50a0 = [];
  let missatgeArr50a0 = 'Llista 49 a 0:';

  for (let i = 0; i < 50; i++) {
    arr0a50.push(i);
    missatgeArr0a50 += `<li>El numero de la llista ${i + 1} és el ${i}</li>`;

    arr50a0.push(49 - i);
    missatgeArr50a0 += `<li>El número de la llista ${i + 1} és el ${49 - i}</li>`;
  }


  /* for (let i = 0; i <= 49; i++) {
    arr0a50.push(i);
    missatgeArr0a50 += `<ul>    
    <li>El numero de la llista ${i + 1} és el ${i}</li>    
    </ul>`;
  }

  for (let i = 49; i >= 0; i--) {
    arr50a0.push(i);
    missatgeArr50a0 += `<ul>
    <li>El número de la llista ${i + 1} és el ${i}</li>
    </ul>
    `;
  } */

  console.log('arr0a50 -->', arr0a50);
  console.log('arr50a0 -->', arr50a0);

  document.getElementById('llista0a50').innerHTML = missatgeArr0a50;
  document.getElementById('llista50a0').innerHTML = missatgeArr50a0;
}
