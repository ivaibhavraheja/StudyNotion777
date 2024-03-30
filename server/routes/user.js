const express = require("express")
const router = express.Router()

const {login, signup, sendotp, changePassword} = require("../controllers/Auth")
const {resetPasswordToken, resetPassword} = require("../controllers/resetPassword")

const { auth } = require("../middleware/auth")

// Routes for Login, Signup, and Authentication
// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

router.post("/login", login)
router.post("/signup", signup)
router.post("/sendotp", sendotp)
router.post("/changepassword", auth, changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

router.post("/reset-password-token", resetPasswordToken)
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router
