var colors = require('colors/safe');
const argv = require('./config/yargs').argv; //obejto llamado argv
const { crearArchivos, listarTabla } = require('./multiplicar/multiplicar'); //vamos a requerir la biblioteca que estoy trabajando
//
//vamos a colocar la carpeta donde de encuentra los metodos los atributos 
//utiliza estructuracion 
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite; //ne
switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivos(base, limite)
            .then(mensaje => console.log(colors.red(mensaje)))
            .catch(err => console.log(colors.yellow(err)));
        break;
    default:
        console.log('comando no valido!');
}
//console.log(argv.base, argv.limite);
/* let base = process.argv[2].split('=')[1];

//let base = '8'; //para la base 

crearArchivos(base)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));
 */
/* la variable el enterno me imprime en que modulo estoy tabajando 
dodne entramos varios parametros  */


//console.log(process.argv); //---------> la infroamcion del node todo lo referente

/* //-------------------npm init : es el gestor de paquetes de nodejs
package name: (03_base)

version: (1.0.0)
description: Aplicacion para multiplicar
entry point: (app.js) --> punto de entrada dodne vamos a ejecutar
test command:
git repository:
keywords:
autor: Morales David 
---package.jsom-------> el achivo es toda la informacion que va atenr mi mudulo  */


//------------------------------ YARGS ------------------
/* instalacion: npm i yargs --save
 packege.json:dependencias necesito la version de yargs
 creado packege-lock.json :esto crea node_modules:modulos 

*/

/* ejecutar : npm isntall nos aydua a instalar los paquetes  */
/* ejecutar : npm unistall nodemon ..... para desintalar algun apquete  */