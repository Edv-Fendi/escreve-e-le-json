const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

let dados = []

function escreveDados (){
    fs.writeFileSync('./db.json', JSON.stringify(dados))
}

function getDados(){
    dados =  JSON.parse(fs.readFileSync('./db.json'))
    return dados;
}




app.get("/users", function (req, res){
    const dados = getDados();
    res.send((dados))
})

app.get("/users/:id", function (req, res){
    const id = req.params.id;
    const usuario = getDados().filter(function(item){
        return item.id == id;
    })

    res.send(usuario);
    
 })

app.post('/', function(req, res){
    console.log(req.body)
    res.send("Recebaaaaaaaaa");

})

app.post('/users', function(req, res){
    const novoUsuario = {
        nome: req.body.nome,
        idade: req.body.idade,
        id: req.body.id 
    }
    getDados()
    dados.push(novoUsuario);
    escreveDados();
    res.sendStatus(201);
    res.send("passou aqui")
    console.log(dados)
})

app.listen(3000, () => console.log("Rodou"));




