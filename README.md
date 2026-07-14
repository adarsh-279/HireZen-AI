# 🚀 HireZen AI

<div align="center">

### AI-Powered Resume Analysis & Interview Preparation Platform

Analyze your resume, measure ATS compatibility, discover skill gaps, generate personalized interview questions, receive a 7-day preparation roadmap, and download professional interview reports—all powered by AI.

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

---

# 📖 Overview

**HireZen AI** is a full-stack AI-powered web application built to help job seekers prepare for interviews intelligently.

Instead of simply reviewing resumes, HireZen AI analyzes a candidate's resume against a target job description and generates a complete interview preparation report that includes:

- ATS Compatibility Score
- Resume Analysis
- Technical Interview Questions
- Behavioral Interview Questions
- Skill Gap Analysis
- Personalized 7-Day Preparation Roadmap
- Downloadable PDF Report

The goal is to bridge the gap between resume preparation and interview readiness using Artificial Intelligence.

---

# ✨ Features

## 📄 AI Resume Analysis

- Upload PDF Resume
- Resume Parsing
- ATS Match Score
- Resume Insights
- AI Recommendations

---

## 🎯 Personalized Interview Preparation

Generate role-specific interview preparation based on:

- Resume
- Self Introduction
- Target Job Description

Includes

- Technical Questions
- Behavioral Questions
- Interviewer Intent
- Ideal Answers

---

## 📊 Skill Gap Analysis

Identify missing skills compared to the target role.

Receive

- Missing Technologies
- Priority Levels
- AI Suggestions

---

## 🛣 7-Day Learning Roadmap

Receive a personalized preparation roadmap containing

- Daily Learning Goals
- Practice Tasks
- Interview Preparation Strategy

---

## 📈 Dashboard

View

- Recent Reports
- Match Scores
- Report History
- Performance Overview

---

## 📄 Professional PDF Reports

Export complete interview reports as beautifully formatted PDF documents.

Generated using

- HTML Templates
- Puppeteer
- Print Styles

---

## 🔒 Authentication

- JWT Authentication
- Refresh Tokens
- Protected Routes
- HTTP-only Cookies
- Logout Token Blacklisting

---

## ⚡ Security

- Rate Limiting
- Secure File Uploads
- CORS Protection
- Input Validation
- Protected APIs

---

# 🏗 Architecture

```
Resume (PDF)
      │
      ▼
 PDF Parsing
      │
      ▼
 Resume Text
      │
      ▼
 AI Analysis
      │
      ▼
 Structured JSON Report
      │
      ├─────────────► MongoDB
      │
      ▼
Frontend Dashboard
      │
      ▼
HTML Template
      │
      ▼
Puppeteer
      │
      ▼
Download PDF
```

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer
- JWT
- Puppeteer

---

## AI

- Groq AI

---

# 📂 Project Structure

```
HireZen-AI/

│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/adarsh-279/HireZen-AI
```

Move into the project

```bash
cd HireZen-AI
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📚 Documentation

Detailed setup instructions are available inside each folder.

| Folder | Description |
|---------|-------------|
| frontend | React + Vite Frontend |
| backend | Express Backend + AI Services |

---

## 🧩 Challenges Faced & How They Were Solved

1. Generating useful interview reports from user input and resumes
   - Challenge: Converting free-form answers and resume text into structured interview reports.
   - Solution: Built `ai.service.js` to call the AI model, created prompt templates, and normalized results into the `interviewReport` schema.

2. Producing clean resumes and printable PDFs
   - Challenge: Creating readable resume HTML and reliable HTML→PDF rendering (fonts, images, CSS).
   - Solution: Added server-side templates in `src/templates`, a `pdf.service` using Puppeteer, and print-oriented CSS. Inlined or referenced absolute asset URLs to ensure consistent rendering.

3. Secure authentication and protected API access
   - Challenge: Securely issuing and validating tokens and protecting user data.
   - Solution: Used JWT tokens stored in secure cookies and `auth.middleware` that validates tokens and checks blacklisted tokens on logout.

4. File uploads and parsing resumes
   - Challenge: Accepting resume files and extracting text reliably.
   - Solution: Used `multer` for uploads and server-side parsing where needed; stored resume metadata in the report documents.

5. Deployment issues with Puppeteer/Chromium
   - Challenge: Some hosts require extra dependencies for headless Chromium.
   - Solution: Documented environment requirements and suggested alternatives (slim chromium builds or cloud PDF services) for serverless deployments.

6. Preventing abuse of expensive endpoints (PDF/AI)
   - Challenge: Heavy operations (AI calls, PDF rendering) can be abused or overload the server.
   - Solution: Implemented an in-memory `rateLimit.middleware.js` for per-user limits and documented using Redis for production.

7. CORS and environment configuration
   - Challenge: Allowing only the trusted frontend origin while developing locally.
   - Solution: `src/app.js` reads `FRONTEND_URL` from env and configures `cors` accordingly; `.env.example` lists required variables.

---

## ✅ Deployment Checklist

- [ ] Provide production environment variables (`PORT`, `MONGO_URI`, `JWT_SECRET`, `FRONTEND_URL`).
- [ ] Add a `start` script to `Backend/package.json` (e.g., `"start": "node server.js"`).
- [ ] Ensure Puppeteer/Chromium works on the chosen host (or use cloud PDF service).
- [ ] Use a process manager (PM2) or Docker for production reliability.
- [ ] Configure HTTPS, reverse proxy, and domain settings.
- [ ] Add monitoring and logging for production.

---

## 📂 Useful Files to Inspect First

- Backend: `server.js`, `src/app.js`, `src/database/db.js`, `src/routes/interview.routes.js`, `src/controllers/interviewcontroller.js`, `src/services/pdf.service.js`
- Frontend: `src/main.jsx`, `src/App.jsx`, `src/routes/Routes.jsx`, `src/report/pages/InterviewReport.jsx`

---

# 💡 What I Learned

This project gave me hands-on experience with:

- Full Stack MERN Development
- AI Prompt Engineering
- REST API Design
- MongoDB Schema Design
- React Context API
- JWT Authentication
- Refresh Token Management
- Cookie-based Authentication
- Puppeteer PDF Generation
- HTML Templating
- File Upload Handling
- Backend Security
- Rate Limiting
- Responsive UI Development
- Production Deployment
- Render & Vercel Configuration

---

# 🔮 Future Improvements

- AI Mock Interviews
- Voice Interview Practice
- AI Resume Builder
- Cover Letter Generator
- Resume Version History
- Company-wise Interview Questions
- Interview Progress Tracking
- Email Report Sharing
- Multi-language Support
- AI Career Roadmap Generator

---

## 🤝 Contributing

Contributions welcome — open issues or PRs for bug fixes, features, or documentation improvements. Keep secrets out of the repo and run tests before opening PRs.

---

# 📄 License

Licensed under the **MIT License**.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.