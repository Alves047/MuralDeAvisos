 //Importaçoes Variaves, Modulos e Codigos Externos
  const express = require("express");
  const router = express.Router();
  const cors = require("cors");
  const posts = require("../model/posts");
  const options = { origin: "http://localhost:3000" };
//-----------------------------
  router.use(cors(options));
//Rota "All" para exibir todos os itens do mural
  router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
  });
//Requisiçao POST
  router.post("/new", express.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.desc;

    posts.newPost(title, description);  

    res.send("Post add"); 
  });
  
module.exports = router;
