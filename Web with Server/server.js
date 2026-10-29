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
  const query =
    "INSERT INTO projetos (imagem, titulo, categoria, descricao, url) VALUES(?, ?, ?, ?, ?);";
  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link,
  ];

  bd.run(query, values, function (err, rows) {
    if (err) return console.log(err);
  });
  return res.redirect("/projetos"); 
 
});

server.post("/excluir/:id", function (req, res) {
  const ID = req.params.id;
  const query = "DELETE FROM projetos WHERE id = ?"
  bd.run(query, ID, function (err){
    if (err) return console.log(err)
  });
  return res.redirect("/projetos");
  
})
server.listen(3000);
