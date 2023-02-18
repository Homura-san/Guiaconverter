var Reader = require('./Reader')
const fs = require('fs')

var leitor = new Reader();



async function main() {
    var dados = await leitor.Read("./users.csv");
    console.log(dados)
}
main();