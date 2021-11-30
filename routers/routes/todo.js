const authentication =require('./../../routers/middleware/authentication')
const authorization=require('./../../routers/middleware/authorization')
const express = require("express");
const {getalltodos} = require("./../controllers/todo")
const todoRouter = express.Router();



todoRouter.get("/alltodos",authentication,authorization, getalltodos);

module.exports = todoRouter;
