const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin:  "https://job-search-application-n5v1.vercel.app"})); 
app.use(express.json());

mongoose.connect(process.env.MongoDB)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use('/api/jobs', require('./pages/routes/JobRoutes'));

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
