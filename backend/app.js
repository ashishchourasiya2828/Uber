const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")

const connectToDb = require("./db/db")
connectToDb();

const userRoutes = require("./routes/user.routes")

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/",(req,res)=>{
    res.send("hely6oo");
})

app.use("/users",userRoutes)



module.exports = app;











