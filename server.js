const express = require("express");
const server = express();

const nunjucks = require("nunjucks");

nunjucks.configure("views", {
    express: server,
    noCache: true,
});

server.use(express.static("public"));

const projetos = [
    {
        imagem: "https://www.flaticon.com/svg/static/icons/svg/3408/3408545.svg",
        titulo: "O advento de battle royale, um estudo sobre Free Fire",
        categoria: "Administração",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://www.flaticon.com/premium-icon/icons/svg/560/560906.svg",
        titulo: "Por que a Terra NÃO é plana?",
        categoria: "Ciências",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://www.flaticon.com/svg/static/icons/svg/560/560891.svg",
        titulo: "Satélite caseiro",
        categoria: "Engenharia",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://www.flaticon.com/svg/static/icons/svg/1448/1448771.svg",
        titulo: "Como os Video Games inspiram nossa criatividade",
        categoria: "Criatividade",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    },
    {
        imagem: "https://www.flaticon.com/svg/static/icons/svg/2942/2942076.svg",
        titulo: "Robótica na educação: construindo o futuro",
        categoria: "Engenharia",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#"
    }
];

server.get("/", function (req, res) {
    return res.render("index.html", { projetos });
});

server.get("/projetos", function (req, res) {
    return res.render("projects.html", { projetos });
});

server.listen(3000);