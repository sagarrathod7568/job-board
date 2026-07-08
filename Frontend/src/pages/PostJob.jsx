import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPostedJob } from "../services/jobService";
import toast from "react-hot-toast";

const initialForm = {
  title: "",
  company: "",
  location: "",
  type: "Full Time",
  experience: "",
  salary: "",
  skills: "",
  description: "",
};

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400";

const PostJob = () => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postedJob = addPostedJob({
      ...form,
      skills: form.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    });

    navigate(`/job/${postedJob.id}`);
    toast.success("Job Posted!");
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Post a Job
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Add a new opening and publish it to the jobs list.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/30"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
              Job Title
            </span>
            <input
              required
              name="title"
              value={form.title}
              onChange={handleChange}
              className={inputClass}
              placeholder="Frontend Developer"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
              Company
            </span>
            <input
              required
              name="company"
              value={form.company}
              onChange={handleChange}
              className={inputClass}
              placeholder="TalentHub"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
              Location
            </span>
            <input
              required
              name="location"
              value={form.location}
              onChange={handleChange}
              className={inputClass}
              placeholder="Bangalore"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
              Job Type
            </span>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Internship</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
              Experience
            </span>
            <input
              required
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className={inputClass}
              placeholder="2-4 Years"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
              Salary
            </span>
            <input
              required
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className={inputClass}
              placeholder="10 - 15 LPA"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
            Skills
          </span>
          <input
            required
            name="skills"
            value={form.skills}
            onChange={handleChange}
            className={inputClass}
            placeholder="React, JavaScript, Tailwind"
          />
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
            Job Description
          </span>
          <textarea
            required
            name="description"
            value={form.description}
            onChange={handleChange}
            className={`${inputClass} min-h-36 resize-y`}
            placeholder="Describe the role, responsibilities, and requirements."
          />
        </label>

        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-blue-600 py-2 text-lg font-semibold text-white transition hover:bg-blue-700 md:w-auto md:px-8"
        >
          Publish Job
        </button>
      </form>
    </section>
  );
};

export default PostJob;
