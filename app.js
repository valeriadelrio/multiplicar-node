const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { createFile, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        createFile(argv.base, argv.limite)
            .then(file => console.log(`File created: `, colors.green(file.green)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
