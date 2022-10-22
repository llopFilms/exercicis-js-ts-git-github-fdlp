import React, { useState } from 'react';
import Select2 from './Select2';
import Select2Sibling from './Select2Sibling';


const CanviNom2 = () => {

  const [name, setName] = useState({ nameIni: "Frarthur" });
  const canviaNom = (nouNom) => setName({ nameIni: nouNom });

  return (
    <div>
      <br></br>
      <Select2Sibling nom={name.nameIni} />
      <Select2 siCanvia={canviaNom} />
    </div>
  );
}

export default CanviNom2;
