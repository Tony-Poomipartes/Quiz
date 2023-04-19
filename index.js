const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const router = require("./src/router");
const middleware404 = require("./src/middlewares/middleware404");
const sessionMiddleware = require("./src/middlewares/sessionMiddleware");
const addLoggedInUserToLocals = require("./src/middlewares/addLoggedInUserToLocals");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(sessionMiddleware);
app.use(addLoggedInUserToLocals);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(middleware404);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Listening at http://localhost:${port}🚀`);
});
