const todoModel = require("./../../db/models/todo");

const createtodo = (req, res) => {
  const{name, user}=req.body;
    const newTodo = new todoModel({ name,
});

//const newTodo = new todoModel({ name: req.body.name, user: req.token.id });
    newTodo
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

const  getalltodos = (req, res) => {
  todoModel
    .find({ isDel: false, user: req.token.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const getTodosById = (req, res) => {
  const { id } = req.params;
  todoModel
    .find({ _id: id, user: req.token.id })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deleteTodo = (req, res) => {
  const { id } = req.params;
    todoModel
       .findByIdAndUpdate(id, { $set: { isDel: true } })
      .then((result) => {
        if (result) {
          res.status(200).json("the tasks has deleted");
        } else {
          res.status(404).json("the tasks not found");
        }
      })
      
      .catch((err) => {
        res.status(400).json(err);
      });
  };
const updateTodo = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  todoModel
    .findByIdAndUpdate(id, { $set: { name: name } })
    .then((result) => {
      if (result) {
        res.status(200).json("todo is updated");
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {createtodo, getalltodos,getTodosById,deleteTodo, updateTodo};