const express = require("express")
const router = express.Router()
const {body} = require("express-validator")
const captainControlllers = require("../controllers/captain.controller")

router.post('/register', [
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be 3 character long"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
    body('vehicle.color').isLength({min:3}).withMessage("color must be at least 3 characters"),
    body('vehicle.plate').isLength({min:3}).withMessage("plate must be at least 3 characters"),
    body('vehicle.capacity').isInt({min:1}).withMessage("capacity must be at least 1 characters"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Inavalid vehicle type")
], captainControlllers.registerCaptain )



module.exports = router