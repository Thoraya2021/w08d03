const authentication =require('./../../routers/middleware/authentication')
const authorization=require('./../../routers/middleware/authorization')
const express = require("express");
const {createtodo,  getalltodos,getTodosById,deleteTodo, updateTodo}= require("./../controllers/todo")
const todoRouter = express.Router();

todoRouter.get("/alltodos", getalltodos);

module.exports = todoRouter;
