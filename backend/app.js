require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/TaskRoutes');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', taskRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
