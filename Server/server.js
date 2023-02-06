require("dotenv").config();

const express = require("express");
const app = express();
const accountRoutes = require("./routes/accounts");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/accounts", accountRoutes);

app.listen(process.env.PORT, () => {
  console.log("app", process.env.PORT);
});
