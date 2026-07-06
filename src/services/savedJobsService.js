import jobs from "../data/jobs";

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

  return jobs.filter((job) => savedJobIds.includes(job.id));
};

export const isJobSaved = (jobId) => {
  return getSavedJobIds().includes(Number(jobId));
};

export const toggleSavedJob = (jobId) => {
  const savedJobIds = getSavedJobIds();
  const numericJobId = Number(jobId);
  const isSaved = savedJobIds.includes(numericJobId);
  const updatedSavedJobIds = isSaved
    ? savedJobIds.filter((savedJobId) => savedJobId !== numericJobId)
    : [...savedJobIds, numericJobId];

  localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(updatedSavedJobIds));

  return !isSaved;
};
