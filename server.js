const express =  require("express");

//1. IMPORTAÇÃO DO NUNJUCKS
const nunjucks= require("nunjucks");
const server = express();

server.use(express.static("public"))

//regras de negocio do nosso servidor
//Criar a ROTA padrão do servidor
//GET - do lado do servidor, serve para RECEBER os pedidos do cliente
//configurar rota padrão "/"

// 2. CONFIGURAR O NUNJUCKS
nunjucks.configure("views", {
    express: server,
    noCache: true, // Desativa o cache para atualizar a página assim que alterarmos o código
});

server.use(express.static("public"));

const projetos = [
    {
        imagem: "https://cdn-icons-png.flaticon.com/128/9985/9985721.png",
        titulo: "Por que a Terra NÃO é plana?",
        categoria: "Ciências", 
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://cdn-icons-png.flaticon.com/128/3522/3522092.png",
        titulo: "O advento de battle royale, um estudo sobre Free Fire",
        categoria: "Administração", 
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://cdn-icons-png.flaticon.com/128/2780/2780137.png",
        titulo: "Como os Video Games inspiram nossa criatividade",
        categoria: "Criatividade", 
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://cdn-icons-png.flaticon.com/128/2780/2780167.png",
        titulo: "Novo projeto",
        categoria: "Criatividade", 
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://cdn-icons-png.flaticon.com/128/2780/2780168.png",
        titulo: "Projeto Mobilidade",
        categoria: "Informática", 
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://cdn.awsli.com.br/1274/1274265/produto/225112206/oslbrady1--culos-de-sol-lovis-brady-frente-iwimfb0kb7.jpg",
        titulo: "BAZE",
        categoria: "Informática",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    }

];

// Rota Principal (Home)
server.get("/", function (req, res) {
    // Passamos um objeto de opções como segundo argumento { projetos }
    return res.render("index.html", { projetos });
});

// Rota de Todos os Projetos
server.get("/projetos", function (req, res) {
    return res.render("projects.html", { projetos });
});

server.listen(3000);
