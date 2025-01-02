const express = require("express")
const router = express.Router()
const {body} = require("express-validator")
const captainControllers = require("../controllers/captain.controller")
const middlewares = require("../middlewares/auth.middleware")


router.post('/register', [
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be 3 character long"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
    body('vehicle.color').isLength({min:3}).withMessage("color must be at least 3 characters"),
    body('vehicle.plate').isLength({min:3}).withMessage("plate must be at least 3 characters"),
    body('vehicle.capacity').isInt({min:1}).withMessage("capacity must be at least 1 characters"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Inavalid vehicle type")
], captainControllers.registerCaptain )

router.post('/login', [
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters")
], captainControllers.loginCaptain )

router.get('/profile',middlewares.authCaptain, captainControllers.getCaptainProfile)

router.get('/logout',middlewares.authCaptain,captainControllers.logoutCaptain)

module.exports = router