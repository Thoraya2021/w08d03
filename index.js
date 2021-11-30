//import to all package what  i install 
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("./db/index");


//run and config express 
const app = express();
dotenv.config();
const roleRouter = require('./routers/routes/role');
const userRouter = require("./routers/routes/user");
const todoRouter=require('./routers/routes/todo')

//middel ware uses what i install and build should write here 
app.use(express.json());
app.use(cors());
app.use(roleRouter)
app.use(userRouter);
app.use(todoRouter);


//here to run locallhost 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

