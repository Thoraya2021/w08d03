const todoModel = require("./../../db/models/todo");

const createtodo = (req, res) => {
  const todoModel = new todoModel(req.body);
  todoModel
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getalltodos = (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { getalltodos };
