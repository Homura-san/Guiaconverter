var Reader = require('./Reader')
var Processor = require('./Processor')  
var Table = require('./Table')

const fs = require('fs')

var leitor = new Reader();



async function main() {
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)
    console.log(usuarios.rows);
}
main();