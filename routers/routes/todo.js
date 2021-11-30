const authentication =require('./../../routers/middleware/authentication')
const authorization=require('./../../routers/middleware/authorization')
const express = require("express");
const {createtodo,getalltodos,getTodosById,deleteTodo, updateTodo}= require("./../controllers/todo")
const todoRouter = express.Router();
todoRouter.get("/alltodos", getalltodos);
todoRouter.get("/todos/:id",authentication, getTodosById);
todoRouter.post("/todos",authentication, createtodo);
todoRouter.put("/todos/:id", authentication, updateTodo);
todoRouter.delete("/todos/:id",authentication, deleteTodo);
module.exports = todoRouter;
