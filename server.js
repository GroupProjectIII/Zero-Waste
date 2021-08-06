require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

const AuserRoute = require('./routes/adminUser')
const cors = require("cors");
app.use(cors());
connectDB();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

const buyerPosts = require("./routes/buyerPosts");
const buyerOffersForSeller = require("./routes/buyerOffersForSeller");
app.use(buyerPosts);
app.use(buyerOffersForSeller);
app.use('/api/adminuser' , AuserRoute);

const postRoutes = require("./routes/posts.js");

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/posts', postRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});