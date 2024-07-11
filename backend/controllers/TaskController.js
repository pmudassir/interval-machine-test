const upload = require('../config/MulterConfig');
const Task = require('../models/TaskModel');

exports.getTasks = (req, res) => {
  const { priority } = req.query;
  if (priority) {
    Task.getByPriority(priority, (err, results) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  } else {
    Task.getAll((err, results) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  }
};

exports.getTaskById = (req, res) => {
  const { id } = req.params;
  Task.getById(id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results[0]);
  });
};

exports.addTask = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      const task = {
        heading: req.body.heading,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        priority: req.body.priority,
        image: req.file ? req.file.filename : null
      };
      Task.add(task, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(201).json({ id: results.insertId });
      });
    }
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      const task = {
        heading: req.body.heading,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        priority: req.body.priority,
        image: req.file ? req.file.filename : req.body.image
      };
      Task.update(id, task, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
      });
    }
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};
