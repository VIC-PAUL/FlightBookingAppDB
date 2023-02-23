const express = require("express");
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();


userRouter.use(express.json());

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const find_user = await UserModel.find({ email });
        if(find_user.length>0) {
            res.send("You are already registered, please login");
        } else {
            bcrypt.hash(password, 5, async (err, hashed_password) => {
                if(err) {
                    console.log(err);
                } else {
                    const user = new UserModel({ name, email, password: hashed_password });
                    await user.save();
                    res.status(201).send("Successfully registered")
                }
            });
        }
       
         
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        if(user.length>0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if(result) {
                    res.status(201).send("Login successful!");
                } else {
                    res.send("Please register first");
                }
            });
        } else {
            res.send("Please register first");
        }
        
    }
    catch (err) {
        console.log("Something went wrong");
        console.log(err);
    }
})

module.exports = {
    userRouter
}