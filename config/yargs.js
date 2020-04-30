let opc = { //un objeto con dos atributos base y milite 
    base: {
        demand: true, //la base es obliagtorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs') //extraer yargs
    //listar y crear cojen el objeto OPC
    .command('listar', 'Imprime en consola la tabal de multiplicar', opc) //imprimela tabla de multiplicar
    .command('crear', 'Crear un archivo de la tabla de multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv
}




/* 
-------------------------> SUBIDA A GIT <---------------------
A)
git init : Initialized empty Git repository in C:/Users/MoralesT/Documents/Ups/node/03_base/.git/
B)
git status :  para ver el estado de mi repositorio local 
* No commits yet : no hay 
C)
hay carpetas que no se suben al repositorio y para eso debemos crear una carpeta llamada .gitignore (dentro de esta carpeta va todo lo que no tenga seguimiento )
 */