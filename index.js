const fs = require('fs')

fs.readFile('./usuario.json', {encoding: 'utf-8'}, (err, dados) => {
    if(err){
        console.log("Um erro aconteceu.");
    }else{
        var conteudo = JSON.parse(dados); // Texto para objeto JS
        conteudo.nome = "Hanako"
        conteudo.curso = 'Imersão react'
        conteudo.categoria = 'React'

        fs.writeFile('./usuario.json', JSON.stringify(conteudo), (err) => {
            if(err){
                console.log('Um erro aconteceu durante a escrita.');
            }
        })
    }
});

