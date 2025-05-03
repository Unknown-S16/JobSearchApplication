import { useEffect, useState, useMemo } from "react";
import { TbBuildings } from "react-icons/tb";
import axios from "axios";
import FilterBar from "./Filter";
import { GoStack } from "react-icons/go";
import { MdOutlinePersonAddAlt } from "react-icons/md";

const Section = () => {
  const [jobs, setJobs] = useState([]);
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState([50, 80]);

  const baseUrl = "https://ik.imagekit.io/hg3rwpt4ia/intern";

  useEffect(() => {
    axios
      .get("https://jobsearchapplication.onrender.com/api/jobs")
      .then((res) => {
        const originalJobs = res.data;
        const repeatedJobs = Array(4)
          .fill(originalJobs)
          .flat()
          .map((job, index) => ({
            ...job,
            _id: `${job._id}-${index}`,
            randomImg: Math.floor(Math.random() * 3) + 1, 
          }));
        setJobs(repeatedJobs);
      })
      .catch((err) => console.error("Failed to fetch jobs:", err));
  }, []);

  const filteredItems = jobs.filter((item) => {
    const matchesRole =
      role === "" || item.title.toLowerCase().includes(role.toLowerCase());
    const matchesLocation = location === "" || item.location === location;
    const matchesJobType = jobType === "" || item.jobType === jobType;
    const matchesSalary =
      item.salary >= salaryRange[0] && item.salary <= salaryRange[1];
    return matchesRole && matchesLocation && matchesJobType && matchesSalary;
  });

  return (
    <section>
      <FilterBar
        role={role}
        setRole={setRole}
        location={location}
        setLocation={setLocation}
        jobType={jobType}
        setJobType={setJobType}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
      />

      <div className="grid mt-[4%] mx-[3%] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col gap-3"
            >
              <div className="w-20 h-20 rounded-lg bg-gradient-to-b border border-white from-white to-gray-300 shadow-[0_0_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
                <img
                  src={item.imageUrl || `${baseUrl}/img${item.randomImg}.png`}
                  alt="CompanyLogo"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>

              <div className="text-gray-500 flex items-center gap-[5%]">
                <p className="text-gray-500 flex items-center">
                  <MdOutlinePersonAddAlt />
                  &nbsp;1–3 yr Exp
                </p>
                <p className="text-gray-500 flex items-center">
                  <TbBuildings />
                  &nbsp;{item.jobType}
                </p>
                <p className="text-gray-500 flex items-center">
                  <GoStack />
                  &nbsp;{item.salary} LPA
                </p>
              </div>

              <p className="text-gray-500 text-sm">{item.description}</p>

              <button className="bg-blue-400 hover:bg-blue-500 w-full p-3 text-white rounded-lg">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No jobs match your filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default Section;
