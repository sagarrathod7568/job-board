import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { getJobById } from "../services/jobService";
import toast from "react-hot-toast";
import { isJobApplied, saveAppliedJob } from "../services/appliedJobsService";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = getJobById(id);
  const [applied, setApplied] = useState(() => isJobApplied(id));

  const handleApply = () => {
    toast.success("Job Applied!");
    saveAppliedJob(id);
    setApplied(true);
    navigate("/applied");
  };

  if (!job) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-red-600">
          Job Not Found
        </h2>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
      >
        <FaArrowLeft />
        Back to Jobs
      </Link>

      <div className="bg-white rounded-2xl shadow-lg p-8 dark:bg-slate-800 dark:shadow-slate-950/30">

        <div className="flex items-center gap-5">

          <div className="w-20 h-20 rounded-xl bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            {job.company.charAt(0)}
          </div>

          <div>

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              {job.title}
            </h1>

            <p className="text-xl text-gray-600 mt-2 dark:text-slate-400">
              {job.company}
            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-6 mt-8 text-gray-600 dark:text-slate-300">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            {job.location}
          </div>

          <div className="flex items-center gap-2">
            <FaBriefcase />
            {job.type}
          </div>

          <div>
            💼 {job.experience}
          </div>

        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Salary
          </h2>

          <p className="text-green-600 text-xl mt-2">
            {job.salary}
          </p>
        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Job Description
          </h2>

          <p className="text-gray-700 leading-8 mt-4 dark:text-slate-300">
            {job.description}
          </p>

        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-3 mt-4">

            {job.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        <button
          className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition disabled:cursor-not-allowed disabled:bg-slate-400"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Already Applied" : "Apply Now"}
        </button>

      </div>

    </section>
  );
};

export default JobDetails;
