const express = require('express')
const authentication =require('./../../routers/middleware/authentication')
const authorization=require('./../../routers/middleware/authorization')
const  {login, signup} = require('./../controllers/user')
const userRouter = express.Router()
userRouter.post("/signup",authentication,authorization,signup);
userRouter.post("/login",authentication,authorization,login);
module.exports = userRouter;