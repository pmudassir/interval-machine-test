const connection = require('../config/db');

const Task = {
  getAll: (callback) => {
    connection.query('SELECT * FROM tasks ORDER BY created_at ASC', callback);
  },
  getByPriority: (priority, callback) => {
    const query = priority === 'all' ? 'SELECT * FROM tasks ORDER BY created_at ASC' : 'SELECT * FROM tasks WHERE priority = ? ORDER BY created_at ASC';
    connection.query(query, [priority], callback);
  },
  getById: (id, callback) => {
    connection.query('SELECT * FROM tasks WHERE id = ?', [id], callback);
  },
  add: (task, callback) => {
    connection.query('INSERT INTO tasks SET ?', task, callback);
  },
  update: (id, task, callback) => {
    connection.query('UPDATE tasks SET ? WHERE id = ?', [task, id], callback);
  },
  delete: (id, callback) => {
    connection.query('DELETE FROM tasks WHERE id = ?', [id], callback);
  }
};

module.exports = Task;
