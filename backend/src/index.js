const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/login", (req, res) => {
  console.log(req);
  res.send("Hello world");
});

const port = 8008;

app.listen(port, () => {
  console.log("App is listening on " + port + " port");
});
