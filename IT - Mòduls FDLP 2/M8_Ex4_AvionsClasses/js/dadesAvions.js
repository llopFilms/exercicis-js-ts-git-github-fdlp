console.log('Carregat dadesAvions');
let avions = [];

function omplirArray() {
  let avioComercial1 = new AvioComercial(
    'A122',
    'Boiboi',
    'Caramel233',
    23000,
    25,
    255
  );
  let avioComercial2 = new AvioComercial(
    'C224',
    'AirePuro',
    'Ronda33A',
    15000,
    15,
    125
  );
  avions.push(avioComercial1, avioComercial2);

  let avioneta1 = new Avioneta('G345', 'Viola', 'Albatros21', 12000, 15, 4);
  let avioneta2 = new Avioneta('H456', 'Regio', 'Amarilla22', 8000, 10, 2);
  avions.push(avioneta1, avioneta2);

  let jetPrivat1 = new JetPrivat('I567', 'Flyme', 'Raig33', 30000, 35, 10);
  let jetPrivat2 = new JetPrivat('J678', 'Ratxa', 'Clibri23', 12000, 10, 6);
  avions.push(jetPrivat1, jetPrivat2);

  console.log('Avions creats');
  console.table(avions);
}
