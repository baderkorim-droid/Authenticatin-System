const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
const validate = require("../middlewares/validate.js");
const { body } = require("express-validator");

router.post(
    "/register",
    [
        body("name").trim().notEmpty().withMessage("Name is required"),
        body("email").trim().isEmail().withMessage("Invalid email format"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    ],validate,
    AuthController.register,
);

router.post(
    "/login",
    [
        body("email").trim().isEmail().withMessage("Invalid email format"),
        body("password").notEmpty().withMessage("Password is required"),
    ],validate,
    AuthController.login,
);

module.exports = router;
