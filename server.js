const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
const bd = require("./bd");

nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

server.get("/", function (req, res) {
  //READ
  bd.all("SELECT * FROM projetos;", function (err, rows) {
    if (err) return res.send(err);
    console.log(rows);
    return res.render("index.html", { projetos: rows });
  });
});

server.get("/projetos", function (req, res) {
  bd.all("SELECT * FROM projetos;", function (err, rows) {
    if (err) return res.send(err);
    console.log(rows);
    return res.render("projects.html", { projetos: rows });
  });
});

server.post("/", function (req, res) {
  console.log(req.body);
  const query =
    "INSERT INTO projetos (imagem, titulo, categoria, descricao, url) VALUES(?, ?, ?, ?, ?);";
  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.url,
  ];
  bd.run(query, values, function (err, rows) {
    if (err) return console.log(err);
    console.log(rows);
  });
  return res.redirect("/projetos");
});

server.listen(3000);
