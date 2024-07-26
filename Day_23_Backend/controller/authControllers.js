const UserModel = require('../model/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


const verifyPassword = async (plainPassword, hashedPassword) => {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword)
    return isMatch
}

const generateJWTToken = (user) => {
    const token = jwt.sign({
        exp: 120,
        data: {
            userId: user._id,
            email: user.email,
        },
    },

        process.env.JWT_SECRET_KEY
    )

    return token
}


const signUP = async (req, res) => {

    try {
        const { email, password, name } = req.body;

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                status: 'fail',
                message: 'User already exists',
            });
        }

        // Create a new user if email doesn't exist

        if (!email || !password) {
            res.status(400).json({
                status: "fail",
                message: "Please provide both email and password."
            });
            return;
        }

        const EMAIL_REGEX = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
        if (!EMAIL_REGEX.test(email)) {
            res.status(400).json({
                status: "fail",
                message: "Invalid email"
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new UserModel({ email, password: hashedPassword, name });
        await newUser.save();

        res.status(201).json({
            status: 'success',
            message: 'User created',
            data: {
                user: newUser,
            },
        });

    } catch (error) {
        if (error.code == 11000) {

            res.status(400).json({
                status: 'error',
                message: "Invalid email or password",
            });
            return;
        }
    }
};


const loginIn = async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({
                status: "fail",
                message: "Both email and password are required to login"
            })
            return;
        }


        const EMAIL_REGEX = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
        if (!EMAIL_REGEX.test(email)) {
            res.status(400).json({
                status: "fail",
                message: "Invalid email"
            });
            return;
        }

        if (password.length < 6) {
            res.status(400).json({
                status: "fail",
                message: "Password should be atleast 6 character long"
            })
        }

        const existingUser = await UserModel.findOne({ email })

        if (!existingUser) {
            res.status(400).json({
                status: "fail",
                message: "Please use correct email address"
            })
            return;
        }

        const hashedPassword = existingUser.password;

        const isPasswordCorrect = await verifyPassword(password, hashedPassword);

        if (!isPasswordCorrect) {
            res.status(400).json({
                status: "fail",
                message: "Incorrect credentials"
            })
            return;
        }

        res.status(200)
        res.json({
            status: "success",
            message: "user logged in",
            data: {
                user: {
                    name: existingUser.name,
                    email: existingUser.email,
                },
                token: generateJWTToken(existingUser)
            }
        })
    }

    catch (error) {

        res.status(500).json({
            status: "Fail",
            message: error.message
        })
    }

}

module.exports = { signUP, loginIn };