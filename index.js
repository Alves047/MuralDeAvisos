const express = require("express");
const PORT = 3000;
const path = require("path");
const apiRout = require("./routes/api")
const app = express();

//Rotas
app.use("/api", apiRout )
app.use("/", express.static(path.join(__dirname, "public")));

//Porta do servidor
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
