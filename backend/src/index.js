const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Log-in function
app.post("/log-in", (req, res) => {
  const { password, email } = req.body;

  const filePath = "backend/src/data/users.json";

  const usersRaw = fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => {
    user.Email === email;
  });

  if (!user) {
    return res.status(401).json({
      message: "Email is not registered",
    });
  }

  if (user.Password !== password) {
    return res.status(401).json({
      message: "Password is incorrect",
    });
  }

  const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });

  res.json({
    token,
  });
});

// Sign-up function
app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "backend/src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => {
    user.Email === email;
  });

  if (user) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ Email: email, Password: password });

  await fs.writeFile(filePath, JSON.stringify(users));

  res.json({ message: "User created" });
});

const port = 8008;

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
