const express =  require("express");
const server = express();

server.use(express.static("public"))

//regras de negocio do nosso servidor
//Criar a ROTA padrão do servidor
//GET - do lado do servidor, serve para RECEBER os pedidos do cliente
//configurar rota padrão "/"

server.get("/", function(req, res){
    return res.sendFile(__dirname + "/index.html")
});

server.get("/projetos", function(req, res){
    return res.sendFile(__dirname + "/projects.html")
});

//portas
server.listen(3000);