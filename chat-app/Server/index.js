const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectdb = require("./config/dbConnection");
const indexRoute = require("./routes/index.route");
const helmet = require("helmet");
const rateLimiter = require("./middleware/ratelimiter");
const app = express();

app.use(express.json());
app.use(cors());

app.use(helmet());
connectdb();

app.use("/", rateLimiter, indexRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app running in ${port}`);
});
