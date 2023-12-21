const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/login", (req, res) => {
  console.log(req);
  res.send("Hello world");
});

app.post("/sign-in", (req, res) => {
  const { password, email } = req.body;
  if (password === "Ganbold0818!" && email === "ganuu@yahoo.com") {
    return res.json({
      token: "123456789",
    });
  }
  res.status(401).send({ message: "Invalid credentials" });
});

const port = 8008;

app.listen(port, () => {
  console.log("App is listening on " + port + " port");
});
