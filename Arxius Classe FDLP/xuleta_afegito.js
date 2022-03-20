
// 

mevaArray.sort ()    //ordena en ordre alfabètic

mevaArray.reverse()   // ordena al reves

variable.toFixed (2); ((limita el nombre de decimals adps 



//////////////  COM AFEGIR SCRIPTS en HTML (just abans de </body>) ////////////////////////////////

<script>"use script"</script>
 
 <script src = "funcionsAuxiliars.js"></script>

// directament:


<script>
</script>



/////////////// INSTANCIAR UN OBJECTE ///////////////

let nouObjecte = new MevaClasse (param1, param 2, param...);


////////////// AFEGIR OBJECTES A UNA ARRAY /////////////////

const arrayObjectes =[ ]
arrayObjectes.push (objecte1);

////////////  AFEGIR OBJECTES A UNA ARRAY /////////////

let arrayObjectes = [ ];

arrayObjectes= [
                objecte 1,
                objecte 2, ...
               ];

////////////  AFEGIR OBJECTES A UNA ARRAY /////////////////

let arrayObjectes = [ ];
arrayObjectes= [new mevaClasse (param 1, param2, ...),
               new mevaClasse (param 1, param2, ...),
               ];


///////////////////// CREAR OBJECTES IN SITU ///////////////////

let objecte1 = {param1: "valor", param2: "valor"};

////////////////// array d'objectes in situ //////////////

arrayObjectes = [
                {param1: "valor", param2: "valor"},
                {param1: "valor3", param2: "valor4"} 
                ]



///////////////////  CREAR OBJECTES QUE CONTENEN ARRAYS D'OBJECTES...mirar Agenda ///////////////////

// param 2 es una array d'objectes

let objecte1 = {
              param1: "valor", param2:
                                        [
                                          {param1: valor, param2:valor },
                                          {param1: valor, param2: valor },
                                           
                                        ]
              };


/////////////////////// ARRAY D'OBJECTES...mirar Agenda /////////////////

let arrayObjectes= [  

                   { 
                    param1: "valor",  // arrayObjectes[0].param1=valor
                    param2:
                          [
                          {param3: valor3, param4:valor4 },  // arrayObjectes[0].param2[0].param3=valor3  arrayObjectes[0].param2[0].param4=valor4
                          {param3: valor, param4: valor }, // arrayObjectes[0].param2[0].param3  arrayObjectes[0].param2[0].param4
                          ]
                  },


                  {
                    param1: "valor2",    // arrayObjectes[1].param1="valor2"
                    param2:
                          [
                          {param3: valor3, param4:valor4 },       // arrayObjectes[1].param2[0].param3=valor3
                          {param3: valor5, param4: valor6 },
                          ]
                  },

                 ]                 


/////////// ARRAY D'OBJECTES....exemple d'agenda ///////////////////////


const agenda = [
                {  // agenda[0]
                categoria: 'Emergencias',                 // agenda[0].categoria="Emergencias"
                contactos:
                   [
                    {  // agenda[0].contactos[0]
                      contacto: 'Emergencias todo tipo',  // agenda[0].contactos[0].contacto="Emergencias todo tipo"
                      numeroTelefono: '112',
                      web: 'http://www.112.es/' 
                    }, 
                    {  // agenda[0].contactos[1]
                      contacto: 'Policía',
                      numeroTelefono: '091',             // agenda[0].contactos[1].numeroTelefono="091"
                      web: 'http://www.policia.es/' 
                    }
                    ]
                 },

                 {    //agenda[1]  
                  categoria: 'Tarjetas de Crédito (cancelación)',       // agenda[1].categoria = "Tarjetas de Crédito"
                  contactos:
                     [                   //agenda[1].contactos[0]
                      {  
                        contacto: 'Visa',
                        numeroTelefono: '900 991 124',                   // agenda[1].contactos[0].numeroTelefono = '900 991 124'
                        web: 'https://www.visa.es/' 
                      },  
                      {  
                        contacto: 'American Express',
                        numeroTelefono: '900 814 500',
                        web: 'https://www.americanexpress.com/es-es/'    // agenda[1].contactos[1].web='https://www.americanexpress.com/es-es/'  
                      } 
                      ]
                  } 

                ]; 


 

// El mateix fet amb classes Agenda v2

class Categoria {
  constructor (categoria, contactosArray) {
    this.categoria=categoria;
    this.contactos=contactosArray;

    setNousContactes (contactosArray) {       
      //this.contactos.push(contactosArray);     //no serveix peque nomes afegix un  
     this.contactos = this.contactos.concat (contactosArray);  //  aixo afegeix tota una nova arrey de contactes
     // tambe serveix Array.prototype.push.apply (this.contactos, contactosArray);
    } 
  }

}

class Contactos {
  constructor (contacto, numeroTelefono, web) {
    this.contacto=contacto;
    this.numeroTelefono=numeroTelefono;
    this.web=web;
  }

}


// creem una array de dos contactos

let contacto1 = new Contactos ("Emergencias", "091", "www.policia.es):
let contacto2 = new Contactos ("Emergencias todo tipo", "112", "www.emergencias.es);
let arrayContactos = [contacto1, contacto2];

// creem l'array d'emergencias posant-hi dos contactes

let categoria1 = new Categorias ("Emergencias", arrayContactos);










