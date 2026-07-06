import { getJobs } from "./jobService";

const SAVED_JOBS_KEY = "savedJobs";

const getSavedJobIds = () => {
  const savedJobs = localStorage.getItem(SAVED_JOBS_KEY);

  if (!savedJobs) {
    return [];
  }

  try {
    return JSON.parse(savedJobs);
  } catch {
    return [];
  }
};

export const getSavedJobs = () => {
  const savedJobIds = getSavedJobIds();

  return getJobs().filter((job) => savedJobIds.includes(job.id));
};

export const isJobSaved = (jobId) => {
  return getSavedJobIds().includes(jobId);
};

export const toggleSavedJob = (jobId) => {
  const savedJobIds = getSavedJobIds();
  const isSaved = savedJobIds.includes(jobId);
  const updatedSavedJobIds = isSaved
    ? savedJobIds.filter((savedJobId) => savedJobId !== jobId)
    : [...savedJobIds, jobId];

  localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(updatedSavedJobIds));

  return !isSaved;
};
