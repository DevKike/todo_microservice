const express = require("express");
const { SERVER } = require("./utils/config");
const cors = require("cors");
const morgan = require("morgan");

const connectDb = require("./db/db");

const todoRouter = require("./module/todo/index");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectDb();

app.use("/todo", todoRouter);

app.listen(SERVER.PORT, () => {
    console.log(`Server running at http://localhost:${SERVER.PORT}`);
});