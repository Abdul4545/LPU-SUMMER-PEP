const express = require("express")

const { signUP, loginIn } = require("../controller/authControllers.js");

const authRouter = express.Router();

authRouter.route('/signup').post(signUP);

authRouter.route("/login").post(loginIn);


module.exports = authRouter