const Users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password) return res.status(400).json({status: "fail", message: "All fields are required"});

        const user = await Users.findOne({email: email});
        if(user) return res.status(400).json({message: "Email already exists"});

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await Users.create({name, email, password: hashPassword});
        
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        const userObj = newUser.toObject();
        delete userObj.password;
        
        res.status(201).json({status: "success", data: userObj, token})
    } catch (err){
        return res.status(500).json({status: "error", message: err.message});
    }
};

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) return res.status(400).json({status: "fail", message: "All fields are required"});

        const user = await Users.findOne({email: email}).select("+password");
        if(!user) return res.status(400).json({status: "fail", message: "Invalid email or password"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({status: "fail", message: "Invalid email or password"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        const userObj = user.toObject();
        delete userObj.password;

        res.status(200).json({status: "success", data: userObj, token});
    } catch(err){
        return res.status(500).json({status: "error", message: err.message});
    }
};

const AuthController = {register, login};
module.exports = AuthController;