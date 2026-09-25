const sqlite3 = require("sqlite3").verbose();
const bd = new sqlite3.Database("./siteAula.bd");

bd.serialize(function(){
    //CREATE
    bd.run("CREATE TABLE IF NOT EXISTS projetos(id INTEGER PRIMARY KEY AUTOINCREMENT, imagem TEXT, titulo TEXT, categoria TEXT, descricao TEXT, url TEXT);");
    //UPDATE
    bd.run("INSERT INTO projetos(imagem, titulo, categoria, descricao, url) VALUES('https://cdn-icons-png.flaticon.com/128/10123/10123360.png', 'O advento de battle royale, um estudo sobre Free Fire', 'Administração', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam', '#');");
    //READ
    bd.all("SELECT * FROM projetos;", function(err, rows){
        if(err) return console.log(err);
        console.log(rows);
    });
    //DELETE
    bd.run("DELETE FROM projetos WHERE id=4;", function(err, rows){
        if(err) return console.log(err);
        console.log("Deletei", this);
    })
})