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
      deadline: formData.deadline
    };
  
   
    try {
      await axios.post("http://localhost:5000/api/jobs", jobData);
  
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
      console.log("roller", jobData); 
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
        className=" h-130 flex flex-col gap-[5%] justify-center "
      >
       
        <div className="flex-1 grid gap-[5%] grid-cols-2">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
          />

          <select
            name="jobType" 
            value={formData.jobType} 
            onChange={handleChange}
            className="w-full border p-2 rounded-xl text-gray-700"
          >
            <option value="" hidden>
              Select Job Type
            </option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>

          <div className="flex gap-4 ">
            <input
              type="number"
              name="minSalary"
              placeholder="Min ₹ (e.g. 40)"
              min={5}
              max={100}
              step={5}
              value={formData.minSalary}
              onChange={handleChange}
              className="w-full border text-center p-2 rounded-xl"
            />
            <input
              type="number"
              name="maxSalary"
              max={100}
              min={5}
              step={5}
              placeholder="Max ₹ (e.g. 60)"
              value={formData.maxSalary}
              onChange={handleChange}
              className="w-full border text-center p-2 rounded-xl"
            />
          </div>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
          />
        </div>
        <div className="flex-1">
          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl h-24"
          />
          <div className="w-full flex justify-between pt-[5%]">
            <button
              onClick={onClose}
              className=" py-3 w-50 font-bold text-lg text-gray-700 flex items-center justify-center rounded-xl border-2 border-gray-700 hover:bg-gray-200 "
            >
              Save Draft &nbsp;
              <FaAngleDoubleDown />
            </button>

            <button
              type="submit"
              className=" bg-blue-500 font-bold text-lg  w-50 text-white   rounded-xl hover:bg-blue-700 "
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
