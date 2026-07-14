# HireZen-AI Backend

Minimal Node.js + Express backend for HireZen-AI. This README provides quick startup instructions, the project layout, and where to look for the main features (auth, interview reports, PDF generation).

---

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run the server (development) — if you use `nodemon` or a dev script:

```bash
npm run dev
# or
node server.js
```

3. Check `package.json` for exact scripts. For production you can use:

```bash
npm start
# or
NODE_ENV=production node server.js
```

---

## Important environment variables

Create a `.env` file (or use environment provider) with at least:

- `PORT` — port the server listens on
- `FRONTEND_URL` — frontend origin for CORS
- `MONGO_URI` (or similar) — MongoDB connection string
- `JWT_SECRET` — secret used to sign JWT tokens
- Any cloud storage credentials if using S3/Cloudinary

There is an `.env.example` in the repo — copy it and fill values for production.

---

## Project structure (important files)

- `server.js` — app entry / server bootstrap
- `package.json` — scripts and dependencies
- `src/app.js` — Express app setup, middleware, CORS and route mounting
- `src/database/db.js` — MongoDB connection
- `src/routes/` — Express route definitions
  - `auth.routes.js` — authentication endpoints
  - `interview.routes.js` — interview/report endpoints (including PDF download route)
- `src/controllers/` — request handlers and business logic
  - `auth.controller.js`
  - `interviewcontroller.js`
- `src/middlewares/`
  - `auth.middleware.js` — JWT auth + blacklist token check
  - `file.middleware.js` — multer file upload middleware
  - `rateLimit.middleware.js` — simple user rate limiter
- `src/models/` — mongoose models
  - `user.model.js`, `interviewReport.model.js`, `blacklist.model.js`
- `src/services/`
  - `ai.service.js` — AI/report generation integration
  - `pdf.service.js` — HTML → PDF generation (uses Puppeteer)
- `src/templates/` — server-side templates used for PDF rendering

---

## Routes overview

Open `src/routes/*.js` to confirm exact methods/paths. Main routes include:

- `POST /api/auth/...` — registration, login, logout (see `auth.routes.js`)
- `POST /api/interview/` — generate a new interview report (protected)
- `GET /api/interview/report` — list reports for the logged-in user (protected)
- `GET /api/interview/report/:interviewId` — fetch a specific report (protected)
- `GET /api/interview/report/:interviewId/pdf` — download a PDF version of a report (protected)

All protected routes use `auth.middleware.js` which expects a JWT in cookies (`req.cookies.token`).

---

## PDF generation / Puppeteer notes

- The project includes `puppeteer` for HTML→PDF rendering. Puppeteer requires a Chromium binary and may need extra OS packages in some deployment environments (Debian/Ubuntu libs, or a custom Chromium build for serverless providers).
- If you plan to deploy to platforms that do not provide Chrome (e.g., some serverless environments), either install a compatible headless Chromium or switch to a cloud PDF service.
- Consider queueing or rate-limiting PDF generation; the repo already includes a simple rate limiter middleware.

---

## Key files to inspect first

- `server.js`
- `src/app.js`
- `src/database/db.js`
- `src/routes/auth.routes.js`
- `src/routes/interview.routes.js`
- `src/controllers/interviewcontroller.js`
- `src/services/pdf.service.js`
- `src/services/ai.service.js`

---

## Deployment checklist

- [ ] Add a `start` script to `package.json` if missing: `"start": "node server.js"`.
- [ ] Provide production env variables (PORT, MONGO_URI, JWT_SECRET, FRONTEND_URL).
- [ ] Verify Puppeteer can run on the target host (install dependencies or use a serverless-friendly approach).
- [ ] Use a process manager (PM2, systemd) or containerize with Docker for production.
- [ ] Configure HTTPS/SSL and a reverse proxy (nginx) if exposing directly.
- [ ] Add monitoring, logging, and health-check endpoints.

---

## Notes for contributors

- Keep secrets out of version control — use `.env` or your environment provider.
- The rate limiter is in-memory and works for single-node deployments; use Redis or a shared store for multi-instance deployments.
- Tests and CI are recommended before production deployments.

---
