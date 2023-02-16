const fs = require('fs')

function modificarUsuario(nome, curso, categoria){
    fs.readFile('./usuario.json', {encoding: 'utf-8'}, (err, dados) => {
        if(err){
            console.log("Um erro aconteceu.");
        }else{
            var conteudo = JSON.parse(dados); // Texto para objeto JS
            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria
    
            fs.writeFile('./usuario.json', JSON.stringify(conteudo), (err) => {
                if(err){
                    console.log('Um erro aconteceu durante a escrita.');
                }
            })
        }
    });
}

modificarUsuario("Pedro Vitor", 'Formação Ruby', "Ruby")