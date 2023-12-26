const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [{ Email: "ganuu@yahoo.com", Pass: "Ganbold0818!" }];

app.post("/sign-up", (req, res) => {
  const { password, email, name } = req.body;
  users.push({ Pass: password, Email: email, Name: name });
  console.log(users);
  res.send(users);
});

app.post("/", (req, res) => {
  const { password, email } = req.body;
  console.log(typeof email, email);
  const isUser = users.find((each) => {
    each === email;
  });
  console.log(users);
  console.log(isUser);
  if (isUser !== undefined) {
    const token = jwt.sign({ email }, "secret");
    res.json(token);
    console.log(token);
  } else {
    res.json("User not found");
  }
});

const port = 8008;

app.listen(port, () => {
  console.log("App is listening on " + port + " port");
});
