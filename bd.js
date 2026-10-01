const sqlite3 = require("sqlite3").verbose();
const bd = new sqlite3.Database("./siteAula.bd");

bd.serialize(function () {
  //CREATE
  bd.run(
    "CREATE TABLE IF NOT EXISTS projetos(id INTEGER PRIMARY KEY AUTOINCREMENT, imagem TEXT, titulo TEXT, categoria TEXT, descricao TEXT, url TEXT);",
  );
  //UPDATE
  const query =
    "INSERT INTO projetos (imagem, titulo, categoria, descricao, url) VALUES(?, ?, ?, ?, ?);";
  const values = [
    "https://www.flaticon.com/svg/static/icons/svg/2942/2942076.svg",
    "Robótica na educação: construindo o futuro",
    "Engenharia",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    "#",
  ];
//   bd.run(query, values, function (err, rows) {
//     if (err) return console.log(err);
//     console.log(rows);
//   });
  //DELETE
  // bd.run("DELETE FROM projetos WHERE id=4;", function(err){
  //     if(err) return console.log(err);
  //     console.log("Deletei", this);
  // })
});

module.exports = bd;
