const express = require("express");
const app = express();
const connectDb = require("./connection/connection");

const PORT = process.env.PORT || 8000;

connectDb();

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
