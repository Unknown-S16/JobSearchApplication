const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  
    trim: true  
  },
  company: {
    type: String,
    required: true, 
    trim: true 
  },
  location: {
    type: String,
    required: true,  
    
  },
  jobType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract", "Internship"],
    required: true
  },
  salary: {
    type: Number,  
    required: true,
  },
  description: {
    type: String,
    required: true,  
    
  },
  logo: { 
    type: String,
    default: ''  
  },
  postedAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Job', jobSchema);
