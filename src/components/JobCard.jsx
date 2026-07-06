import { Link } from "react-router-dom";
import { FaBookmark, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { useState } from "react";
import { isJobSaved, toggleSavedJob } from "../services/savedJobsService";

const JobCard = ({ job, onSavedChange }) => {
  const [saved, setSaved] = useState(() => isJobSaved(job.id));

  const handleToggleSaved = () => {
    const nextSaved = toggleSavedJob(job.id);
    setSaved(nextSaved);
    onSavedChange?.();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-950/30">

      {/* Company */}

      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            {job.company.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {job.title}
            </h2>

            <p className="text-gray-500 dark:text-slate-400">
              {job.company}
            </p>
          </div>

        </div>

        <button
          type="button"
          onClick={handleToggleSaved}
          className={`hover:text-blue-600 dark:hover:text-blue-400 ${
            saved
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-400 dark:text-slate-500"
          }`}
          aria-label={saved ? "Unsave job" : "Save job"}
        >
          <FaBookmark />
        </button>

      </div>

      {/* Info */}

      <div className="flex flex-wrap gap-5 mt-6 text-gray-600 text-sm dark:text-slate-300">

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcase />
          {job.type}
        </div>

      </div>

      <div className="mt-4">

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {job.experience}
        </span>

      </div>

      <p className="mt-6 font-semibold text-lg text-green-600">
        {job.salary}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">

        {job.skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm dark:bg-slate-700 dark:text-slate-200"
          >
            {skill}
          </span>
        ))}

      </div>

      <Link
        to={`/job/${job.id}`}
        className="block mt-8"
      >
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
          View Details
        </button>
      </Link>

    </div>
  );
};

export default JobCard;
