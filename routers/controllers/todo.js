const  todoModel =require ('./../../db/models/todo')

const getalltodos = (req, res) => { 
    todoModel
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

  module.exports= { getalltodos }
