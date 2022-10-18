

        //Programa validacioDni
        function check(numDni){
            
            //Recerca de la lletra teòrica calculada amb el residu
            let llista = "TRWAGMYFPDXBNJZSQVHLCKE";
            let residu = numDni % 23;
            let checkLletra = llista.charAt(residu);

            return checkLletra;

        }
            
        //Funció Validació
        function validacioDni() {
        
            let dniInici = llegeixDada("dniInici");
            let misstageError = "<b>Dades incorrectes. Introduïu un número de DNI correcte.</b>";

            //Separació lletra, número i posar a majúscula
            let numDni = dniInici.substring(0, dniInici.length-1);
            let lletra = dniInici.substring(dniInici.length-1);
            lletra = lletra.toUpperCase();

            //Estat inicial validació i gestió de dades
            let numDniMida = numDni.length;
            let lletraMida = lletra.length;
            let llista = "TRWAGMYFPDXBNJZSQVHLCKE";
            
            //Validació
            let validacio = false;
            
            if (numDni =="" || isNaN(numDni) || 0<= numDni > 99999999 || numDniMida !==8 || lletra =="" || !llista.includes(lletra) || !isNaN(lletra) || lletraMida !==1){

                validacio;
                escriuDada("avis",misstageError);
                dadaDolenta("dniInici");
                                                                            
            }else{
                validacio = true;
                check(numDni);
            }

            let checkLletra = check(numDni);

            if (checkLletra == lletra){
            validacio = true;
            dadaBona("dniInici");
            inici();

            }else{
            validacio = false;
            escriuDada("avis", misstageError);
            }
            
        }