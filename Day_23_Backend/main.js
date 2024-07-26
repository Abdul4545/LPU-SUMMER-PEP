require("dotenv").config();
require("./config/db.js")

const express = require("express");
const cors = require("cors")

const authRouter = require("./router/authRoutes.js");

const app = express()

app.use(express.json())

app.use(cors({origin: true}))

app.use("/api/v1/auth", authRouter);


app.get("/", (req, res) => {
    res.end("hi")
})


app.listen(process.env.PORT, () => {
    console.log(`----------- Server listening at ${process.env.PORT} -------------`);
})
