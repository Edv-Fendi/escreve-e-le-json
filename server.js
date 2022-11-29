const express = require("express");
const fs = require("fs");

let dados = []
function getDados(){
    dados =  JSON.parse(fs.readFileSync('./db.json'))
    return dados;
}


const app = express();

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

app.listen(3000, () => console.log("Rodou"));




