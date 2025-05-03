const express = require('express');
const router = express.Router();
const Job = require('../models/JobModel');

// GET 
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).send("Failed to fetch jobs.");
  }
});

// POST 
router.post('/', async (req, res) => {
  try {
    const newJob = new Job(req.body);   
    await newJob.validate();

   
    await newJob.save();
    res.status(200).send("Job posted successfully!");
  } catch (err) {
    console.error("Error posting job:", err);
    res.status(500).send(`Failed to post job: ${err.message}`);
  }
});



module.exports = router;
