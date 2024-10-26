const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectdb = require("./config/dbConnection");
const indexRoute = require("./routes/index.route");
const app = express();

app.use(express.json());
app.use(cors());
connectdb();

app.use("/", indexRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app running in ${port}`);
});
