var Reader = require('./Reader')
var Processor = require('./Processor')

const fs = require('fs')

var leitor = new Reader();



async function main() {
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados)
}
main();