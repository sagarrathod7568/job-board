# TalentHub Job Board

TalentHub is a responsive job board web application built with React, Vite, Tailwind CSS, and React Router. It allows users to browse jobs, search openings, view job details, save jobs, apply for jobs, and post new jobs locally.
<img width="1617" height="800" alt="image" src="https://github.com/user-attachments/assets/9ae83f94-e25c-4438-a3cb-3dc1f589bd21" />

## Live Links

- GitHub Repository: https://github.com/sagarrathod7568/Job-Board
- Vercel Deployment: https://job-board-nine-mauve.vercel.app/

## Features

### Job Listing

- Displays job cards from the default `jobs.js` dataset.
- Shows key job information such as title, company, location, job type, experience, salary, and skills.
- Supports newly posted jobs saved in browser localStorage.

### Search Jobs

- Users can search jobs by title, company, location, job type, experience, salary, description, or skills.
- Search works from the hero search bar.
- After searching, the page automatically scrolls to the results section.
- If no matching jobs are found, the app displays a clear "No data found" message.

### Job Details

- Each job card has a `View Details` button.
- The details page shows full job information, required skills, salary, and job description.
- Users can apply for a job from the details page.

### Saved Jobs

- Users can click the bookmark icon on a job card to save a job.
- Clicking the bookmark icon again removes the job from saved jobs.
- The `Saved Jobs` page displays only bookmarked jobs.
- Saved jobs are stored in localStorage.

### Applied Jobs

- Users can apply for a job from the job details page.
- Applied jobs are stored separately from saved jobs.
- The `Applied Jobs` page displays only jobs the user has applied for.

### Post Job

- The `Post Job` button opens a job posting form.
- Users can add title, company, location, job type, experience, salary, skills, and description.
- Submitted jobs are saved in localStorage.
- Posted jobs appear in the job list, search results, job details page, saved jobs, and applied jobs.

### Dark Mode

- The navbar includes a dark/light mode toggle.
- Theme preference is saved in localStorage.
- The app supports dark styling across the main layout, navbar, job cards, search bar, forms, and job pages.

### Responsive Navigation

- Desktop navigation includes Home, Jobs, Saved Jobs, Applied Jobs, and Post Job.
- Mobile navigation uses a collapsible menu.
- Home and logo navigation return users to the top of the home page.
- Jobs navigation scrolls users directly to the jobs section.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- LocalStorage
- ESLint
- GitHub Actions
- Vercel

## Project Structure

```text
src/
  components/
    Footer.jsx
    Hero.jsx
    JobCard.jsx
    Navbar.jsx
    SearchBar.jsx
  data/
    jobs.js
  layouts/
    MainLayout.jsx
  pages/
    AppliedJobs.jsx
    Home.jsx
    JobDetails.jsx
    NotFound.jsx
    PostJob.jsx
    SavedJobs.jsx
  services/
    appliedJobsService.js
    jobService.js
    savedJobsService.js
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone <your-repository-url>
cd job-board
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home page |
| `/jobs` | Home page with automatic scroll to jobs section |
| `/job/:id` | Job details page |
| `/saved` | Saved jobs page |
| `/applied` | Applied jobs page |
| `/post-job` | Post job form |
| `*` | 404 page |

## Data Storage

This project uses browser localStorage for interactive features:

- `theme`: Stores light or dark mode preference.
- `savedJobs`: Stores bookmarked job IDs.
- `appliedJobs`: Stores applied job IDs.
- `postedJobs`: Stores jobs created from the Post Job form.

Because the project uses localStorage, saved, applied, and posted jobs are stored only in the current browser.

## CI/CD

### Current GitHub Actions CI

The project includes a GitHub Actions workflow at:

```text
.github/workflows/ci.yml
```

The workflow runs on pushes and pull requests to the `main` branch. It:

- Checks out the repository.
- Sets up Node.js 20.
- Installs dependencies.
- Builds the project.

### Recommended CI Improvement

You can also include linting in CI:

```yaml
name: React CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install Dependencies
        run: npm ci

      - name: Run Lint
        run: npm run lint

      - name: Build Project
        run: npm run build
```

## Vercel Deployment

### Option 1: Deploy Through Vercel Git Integration

1. Push the project to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Select Vite as the framework preset.
5. Use these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Deploy the project.

Vercel will automatically redeploy when new changes are pushed to the connected branch.

### Option 2: Deploy With GitHub Actions

To deploy through GitHub Actions, add these repository secrets in GitHub:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Example deployment workflow:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install Dependencies
        run: npm ci

      - name: Run Lint
        run: npm run lint

      - name: Build Project
        run: npm run build

      - name: Deploy to Vercel
        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Submission Checklist

- GitHub repository pushed.
- GitHub Actions workflow added and passing.
- Vercel deployment completed.
- README documentation completed.
- Final GitHub and Vercel links added at the top of this README.

## Author

Sagar Rathod
