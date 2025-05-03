import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { RiUserVoiceLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const locations = ["Remote", "On-site", "Hybrid"];
const jobTypes = ["Full-time", "Part-time", "Internship", "Contract"];

const Filter = ({
  role,
  setRole,
  location,
  setLocation,
  jobType,
  setJobType,
  salaryRange,
  setSalaryRange,
}) => {
  const handleSalaryChange = (e, newValue) => {
    setSalaryRange(newValue);
  };

  const min = Math.min(...salaryRange);
  const max = Math.max(...salaryRange);

  return (
    <div className="flex w-full justify-between mt-4 p-4 bg-white px-[5%] shadow-md shadow-gray-100">
      {/* Role */}
      <div className="flex-1 px-2 flex items-center border-r-3 border-gray-200 text-gray-500">
        <IoSearchOutline size={25} />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-2 py-2 placeholder-gray-500 text-gray-700"
        />
      </div>

      {/* Location */}
      <div className="flex-1 px-2 flex items-center text-gray-500 justify-center border-r-3 border-gray-200">
        <SlLocationPin size={20} />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-2 py-3 w-[70%]"
        >
          <option value="" hidden>
            Preferred Location
          </option>
          {locations.map((loc) => (
            <option key={loc} value={loc} className="text-gray-700">
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Job Type */}
      <div className="flex-1 px-2 border-r-3 flex justify-center items-center border-gray-200 text-gray-500">
        <RiUserVoiceLine size={20} />
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="w-[50%] px-2 py-3 mt-2"
        >
          <option value="" hidden>
            Job Type
          </option>
          {jobTypes.map((type) => (
            <option key={type} value={type} className="text-gray-700">
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Salary Range */}
      <div className="flex-1 flex justify-center px-5">
        <Box sx={{ width: { xs: 100, md: 300 } }}>
          <div className="flex w-full">
            <p className="hidden lg:inline flex-1 text-center">Salary Per Month</p>
            <p className="flex-1 text-center">
              ₹{min}k - ₹{max}k
            </p>
          </div>

          <Slider
            value={salaryRange}
            onChange={handleSalaryChange}
            min={5}
            max={100}
            step={5}
            sx={{
              color: "black",
              "& .MuiSlider-thumb": {
                backgroundColor: "white",
                border: "5px solid black",
                width: 15,
                height: 15,
                borderRadius: "50%",
              },
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default Filter;
