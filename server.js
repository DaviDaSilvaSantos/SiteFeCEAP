const express =  require("express");
const server = express();
//console.log(server);

//regras de negocio do nosso servidor
//Criar a ROTA padrão do servidor
//GET - do lado do servidor, serve para RECEBER os pedidos do cliente
//configurar rota padrão "/"
server.get("/", function(req, res){
    return res.sendFile(__dirname + "/index.html")
});
//portas
server.listen(3000);