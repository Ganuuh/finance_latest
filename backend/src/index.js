const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { connectToDatabase } = require("./database");
const { User } = require("./model/user.model");
const { Category } = require("./model/category.model");
const { Record } = require("./model/record.model");
const { addListener } = require("process");

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectToDatabase();
//Log-in function
app.post("/log-in", async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json({
      message: "Sign up , user not found",
    });
  }

  if (user.password !== password) {
    return res.json({
      message: "Wrong password",
    });
  }

  const id = user._id;

  const token = jwt.sign({ id }, "secret-key", { expiresIn: "2h" });

  res.json({
    token,
  });
});

// Sign-up function
app.post("/sign-up", async (req, res) => {
  const { email, password, name } = req.body;
  await User.create({
    name,
    email,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const user = await User.findOne({ email: email, password: password });

  const id = user._id;

  const token = jwt.sign({ id }, "secret-key", { expiresIn: "2h" });

  res.json({
    token,
  });
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

    const { id } = payload;

    const { type, amount, category, color, icon } = req.body;

    Record.create({
      type,
      amount,
      category: {
        name: category,
        color: color,
        icon: icon,
      },

      userId: id,
    });

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

    const { id } = payload;

    const records = await Record.find({ userId: id });

    const { days } = req.query;

    const date = new Date(Number(days) + 28800000);

    const filteredRecords = records.filter((item) => item.createdAt > date);

    return res.json(filteredRecords);
  } catch (error) {
    console.log(error);
    res.status(409).json({
      message: "Unauthorized in proccesing",
    });
  }
});

//delete records by id
app.post("/delete-record", async (req, res) => {
  try {
    const { id } = req.body;

    await Record.deleteOne({ _id: id });

    res.json({
      message: "Record deleted !",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Error occured",
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
    const { icon, color, name } = req.body;

    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const category = await Category.findOne({ name: name });

    if (category) {
      return res.status(401).json({
        message: "Category already exists",
      });
    }

    Category.create({
      name,
      icon,
      color,
      userId: id,
    });
    res.json({
      message: "Category added succesfully",
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
    return res.status(401).json({
      message: "Token not found , Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const categories = await Category.find({ userId: id });

    return res.json(categories);
  } catch (error) {
    res.json({
      message: "Error occured in processing",
    });
  }
});

//delete categories by id
app.post("/delete-category", async (req, res) => {
  try {
    const { id } = req.body;

    await Category.deleteOne({ _id: id });

    res.json({
      message: "Category deleted",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Error occured",
    });
  }
});

const port = 8008;

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
