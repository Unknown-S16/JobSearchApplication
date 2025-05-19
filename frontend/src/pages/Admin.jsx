import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

import axios from "axios";
const AdminPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    minSalary: "",
    maxSalary: "",
    description: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title: formData.title,
      company: formData.company,
      location: formData.location,
      jobType: formData.jobType,
      salary: parseInt(formData.maxSalary),
      description: formData.description,
      deadline: formData.deadline,
    };

    
    try {
      await axios.post("https://jobsearchapplication.onrender.com/api/jobs", jobData);

      alert("Job posted successfully!");
      setFormData({
        title: "",
        company: "",
        location: "",
        jobType: "",
        minSalary: "",
        maxSalary: "",
        description: "",
        deadline: "",
      });
      
    } catch (err) {
      console.error("Error posting job:", err);
      alert("Failed to post job.");
    }
  };

  return (
    <div className="space-y-4 mt-5 max-w-3xl mx-auto p-6 bg-white rounded-xl p-15">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Job Opening
      </h2>
      <form
  onSubmit={handleSubmit}
  className="h-130 flex flex-col gap-[5%] justify-center"
>
  <div className="flex-1 grid gap-[5%] grid-cols-2 ">
    {/* Job Title */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Job Title</label>
      <input
        type="text"
        name="title"
        placeholder="Role : FullStack"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-[4%] rounded-xl"
      />
    </div>

    {/* Company Name */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Company Name</label>
      <input
        type="text"
        name="company"
        placeholder="Amazon, Swiggy, Tesla"
        value={formData.company}
        onChange={handleChange}
        className="w-full border  p-[4%] rounded-xl"
      />
    </div>

    {/* Location */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium bold text-gray-700">Location</label>
      <select
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="w-full border p-[4%] rounded-xl text-gray-700"
      >
        <option value="" hidden >Select Location</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>

    {/* Job Type */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Job Type</label>
      <select
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
        className="w-full border  p-[4%] rounded-xl text-gray-700 "
      >
        <option value="" hidden>Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
     
    {/* Salary Range */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Salary Range (₹)</label>
      <div className="flex gap-4">
        <input
          type="number"
          name="minSalary"
          placeholder=" ↑↓ 0"
          min={0}
          max={1000000}
          step={500}
          value={formData.minSalary}
          onChange={handleChange}
          className="w-full border text-center  p-[4%] rounded-xl"
        />
        <input
          type="number"
          name="maxSalary"
          placeholder=" ↑↓ 1200000"
          max={1000000}
          min={0}
          step={500}
          value={formData.maxSalary}
          onChange={handleChange}
          className="w-full border text-center  p-[4%] rounded-xl"
        />
      </div>
    </div> 

    {/* Deadline */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Application Deadline</label>
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="w-full border  p-[4%] rounded-xl"
      />
    </div>
  </div>

  {/* Job Description */}
  <div className="flex-1 mt-4">
    <label className="mb-1 block font-medium text-gray-700">Job Description</label>
    <textarea
      name="description"
      rows={2}
      placeholder="Please share a description to let the candidate know more about the job role"
      value={formData.description}
      onChange={handleChange}
      className="w-full border  p-[4%] rounded-xl min-h-[60%] text-sm"
    />

    <div className="w-full flex justify-between pt-[5%]">
      <button
        onClick={onClose}
        className="py-3 w-50 font-bold text-lg text-gray-700 flex items-center justify-center rounded-xl border-2 border-gray-700 hover:bg-gray-200"
      >
        Save Draft &nbsp; <FaAngleDoubleDown />
      </button>

      <button
        type="submit"
        className="bg-blue-500 font-bold text-lg w-50 text-white rounded-xl hover:bg-blue-700"
      >
        Post Job
      </button>
    </div>
  </div>
</form>

    </div>
  );
};

export default AdminPage;
