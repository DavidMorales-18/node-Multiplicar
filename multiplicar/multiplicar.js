///nuestro modulo multiplicar 
//tabla de multiplicar 
const fs = require('fs');
const colors = require('colors'); //extraer la libreria de lso colores instaladas 
/* declaro un constante y coloco los modulos que vamos a utilizar en esta ocacion es fs ( file system)  */
//-----------Listar Tabla --------------
let listarTabla = (base, limite = 10) => { //limite cogera por defecto el numero 10 
    if (!Number(base)) {
        console.log(`El valor de la base ${base} no es valida`);
        return;
    }
    console.log("=============================".green);
    console.log("=============================".green);
    console.log(`TABLA DE MULTIPLICAR ${base}`.red);
    console.log("=============================".green);
    console.log("=============================".green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}= ${base * i}`);
    }
}




////----------------------PROMESA---------------------
let crearArchivos = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        //---------VAlidar que la base sea un numero------>
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es valido `);
            return;
        }
        let data = ''; //contenga la informacion que vamos a guardar 

        for (let i = 1; i <= limite; i++) { //tabla de multiplicar FOR
            data += `${base} X ${i}= ${base*i}\n`;
        }

        //paquetes dentro de Nodo js 
        //node  --v   (ve la version del node js)


        //____________callbacks nodejs_______________//
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => { //
            /* nombre el archivo ,guarda los datos,error(funcion fecha) */
            if (err)
                reject(err); //error lanza un excepcion 
            else
                resolve(`El archivo de la tabla del ${base} al ${limite} ha sido guardada`);

            //la promesa se debe de resolver como promesa reject y resolve

        });

    });

}

module.exports = {
    crearArchivos, //publico 
    listarTabla //exportar la funcion lista 
}

///////__________________________CLORS ____________________/////
/* Instalacion: npm install colors --save */

/*  --save : se instala como dependencia donde se necesita esa libreria para que funcione mi aplicacion  */