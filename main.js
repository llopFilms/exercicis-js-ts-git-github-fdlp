const persona = {
  nom: 'Maria',
  edat: 30,
  ciutat: 'Barcelona',
};

for (let propietat in persona) {
  console.log(`${propietat}: ${persona[propietat]}`);
}

