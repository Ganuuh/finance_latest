const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { error } = require("console");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Log-in function
app.post("/log-in", async (req, res) => {
  const { password, email } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.Email === email);

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

  const filePath = "src/data/users.json";

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
  console.log("Success");
});

//Add record function
app.post("/add-record", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(409).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const { type, amount, category, dateTo, dateFrom } = req.body;

    const filePath = "src/data/records.json";

    const rawFile = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(rawFile);

    records.push({
      type,
      amount,
      category,
      dateTo,
      dateFrom,
      Email: email,
    });

    await fs.writeFile(filePath, JSON.stringify(records));

    res.json({ message: "Record created" });
  } catch (error) {
    console.log(error);
  }
});

//Get record by email
app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(409).json({
      message: "Unauthorized",
    });
  }
  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const filePath = "src/data/records.json";

    const rawFile = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(rawFile);

    const filteredRecords = records.filter((each) => {
      return each.Email === email;
    });

    res.json({
      filteredRecords,
    });
  } catch (error) {
    res.status(409).json({
      message: "Unauthorized in proccesing",
    });
  }
});

//Add categories
app.post("/categories", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "Token not found , Unauthorized",
    });
  }

  try {
    const { name, image } = req.body;

    const filePath = "src/data/categories.json";

    const rawFile = await fs.readFile(filePath, "utf8");

    const categories = JSON.parse(rawFile);

    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    categories.push({
      name,
      image,
      Email: email,
    });

    await fs.writeFile(filePath, JSON.stringify(categories));

    res.json({
      message: "Category added",
    });
  } catch (error) {
    res.status(409).json({
      message: "Error occured",
    });
  }
});

//Get categories by email
app.get("/get-categories", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "Token not found , Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const filePath = "src/data/categories.json";

    const rawFile = await fs.readFile(filePath, "utf8");

    const categories = JSON.parse(rawFile);

    const filteredCategories = categories.filter((each) => {
      return each.Email === email;
    });

    res.json({
      filteredCategories,
    });
  } catch (error) {
    res.json({
      message: "Error occured in processing",
    });
  }
});
const port = 8008;

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
