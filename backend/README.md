# Niraksh-Guardian Backend

The backend of Niraksh-Guardian serves as the robust intelligence engine of the platform. It handles complex AI orchestrations, secure data persistence, and high-performance caching to seamlessly support real-time medical insights and doctor recommendation routing.

## 🌟 About the Backend

The backend is built as the trustworthy foundation of the Niraksh-Guardian ecosystem. It is responsible for taking user uncertainties—whether it’s a confusing list of symptoms, a photo of a pill bottle, or a complex medical history—and orchestrating the necessary steps to provide clear, actionable guidance. We prioritize data security, rapid response times, and highly accurate analysis above all else.

## 🎯 Our Goal

To solve the challenge of accurately and securely interpreting fragmented personal health data at scale. We aim to build a resilient, highly available data layer that bridges the gap between the user’s immediate health queries and the complex AI processing required to answer them, ensuring every patient receives their insights without delay and without compromising their privacy.

## 🚀 Innovative Features

- **🧠 Multi-Modal Analysis Orchestration:** The backend accepts symptoms, free-form chat, prescriptions, medicine images, and lab reports, then turns them into structured health outputs.
- **📡 Real-Time Streaming Workflows:** Chat responses and lab report processing can stream progress updates so users see results as they are generated.
- **💊 Personalized Safety Checks:** Drug interaction analysis considers the user's current medicines and recent medication history, not just a single input list.
- **🗺️ Intelligent Matchmaking Engine:** Doctor recommendations are ranked by symptoms, condition tags, location, rating, experience, and fees for better matching.
- **📚 Medical Knowledge & Research Layer:** Disease information, research paper lookup, and symptom summaries support clearer health education and referral.
- **📄 Centralized Patient Portfolios:** Health summaries, generated reports, and lab report history are stored together so users and doctors can review a complete timeline.
- **📧 Proactive Communication Safety:** SES event handling and delivery monitoring help keep critical email notifications reliable.
- **🌐 Language-Aware Health Context:** User language preference is stored so the platform can keep conversational and UI flows more accessible.
- **🩺 Care Coordination:** Appointment requests, doctor approval, weekly availability, and consultation modes are managed through a role-aware doctor portal.
- **🔐 Consent-Based Clinical Context:** Appointment-linked intake sessions use explicit patient consent, triage flags, expiry, revocation, and doctor-only access grants.
- **🧾 Clinical Continuity:** A merged patient timeline combines lab reports, uploaded prescriptions, medicine and symptom analyses, clinical intake, and issued doctor prescriptions.
- **💊 Prescription Safety Workflow:** Doctors must run an interaction check against proposed and recorded medicines before issuing an appointment-linked prescription.
- **🧹 Automated Health-Data Retention:** Idempotent cleanup jobs enforce TTL on disease cache (30d), lab report shares (7d), clinical intake sessions, access grants, auth tokens, and reports quota (max 10 health reports, 365d lab reports) with coordinated Cloudinary deletion and zero-PHI audit logging.

## 💻 Tech Stack

- **Framework:** Express.js + Node.js
- **Language:** TypeScript
- **Database:** PostgreSQL (via Prisma ORM), Redis
- **AI Integration:** Google GenAI / Gemini API (JSON Mode & Vision)
- **Cloud Services:** AWS SES/SNS (Email), Cloudinary (Images & PDFs)
- **Validation:** Zod
- **Security:** Helmet, CORS, bcrypt, jsonwebtoken

## 🏁 Getting Started

### Prerequisites

- Node.js (v20+)
- PostgreSQL
- Redis
- AWS Account (SES setup)
- Cloudinary Account
- Google Gemini API Key
- Google OAuth Client ID/Secret
- pnpm

### Installation

1. Clone the repository and navigate to the backend directory:

    ```bash
    cd backend
    pnpm install
    ```

2. Environment Variables:
   Create a `.env` file based on `.env.example` and fill in your credentials. For a full breakdown of all backend variables and required vs. optional status, see the [Environment Variables Reference](../ENV.md).

    ```env
    PORT=4000
    DATABASE_URL=postgresql://user:password@localhost:5432/niraksh_guardian?schema=public
    # Set this separately when DATABASE_URL is a Prisma Accelerate URL.
    DIRECT_DATABASE_URL=postgresql://user:password@localhost:5432/niraksh_guardian?schema=public
    REDIS_URL=redis://localhost:6379
    JWT_SECRET=your_jwt_secret
    # Add other required keys for AWS, Cloudinary, and Gemini
    ```

3. Database Setup:

    ```bash
    pnpm install
    pnpm prisma generate
    pnpm prisma:migrate
    pnpm seed
    ```

    For a production database, use `pnpm prisma:deploy` instead of
    `pnpm prisma:migrate`. If `DATABASE_URL` uses Prisma Accelerate, set
    `DIRECT_DATABASE_URL` to the direct PostgreSQL connection string first.

4. Start the Server:
    ```bash
    pnpm dev
    ```
    The API will be available at `http://localhost:4000` (or your defined PORT).

5. Verify the Server:
    ```bash
    curl -s http://localhost:4000/health
    ```

## 🩺 Health Checks & Verification

After starting the backend, verify its operational status using the health check endpoints.

### One-Command Quick Verification

```bash
curl -i http://localhost:4000/health
```

Or using PowerShell on Windows:

```powershell
Invoke-RestMethod -Uri http://localhost:4000/health
```

### Endpoints Overview

| Endpoint | Purpose | Probe Type | Expected Status |
|---|---|---|---|
| `GET /` | Root welcome message | Liveness (process is running) | `200 OK` |
| `GET /api` | API route directory | Liveness (Express router is mounted) | `200 OK` |
| `GET /health` | Database & Redis status + auth metrics | Dependency readiness | `200 OK` (healthy) / `503 Service Unavailable` (degraded) |

### Liveness vs. Dependency Readiness

- **Liveness (`GET /` or `GET /api`)**: Probes whether the Node.js/Express server process is running and accepting HTTP requests, independent of external dependencies. Use this for basic process-uptime checks and reverse proxy pinging.
- **Dependency Readiness (`GET /health`)**: Actively tests live connections to external dependencies:
  - **PostgreSQL** via Prisma (`SELECT 1`)
  - **Redis** via `PING`
  - Returns **`200 OK`** (`status: "ok"`) when all dependencies are healthy.
  - Returns **`503 Service Unavailable`** (`status: "degraded"`) if PostgreSQL or Redis is unreachable. Note: The backend is architected to continue running in degraded mode even when Redis is down, but response caching and token blacklisting will be inactive.

### Expected Responses

#### 1. All Services Healthy (`GET /health` → `200 OK`)

```bash
curl -s http://localhost:4000/health
```

```json
{
  "status": "ok",
  "uptime": 128,
  "timestamp": "2026-11-14T15:30:00.000Z",
  "checks": {
    "database": {
      "status": "healthy",
      "latency": 3
    },
    "redis": {
      "status": "healthy",
      "latency": 1
    }
  },
  "auth": {
    "activeSessions": 0,
    "failedAttempts": 0,
    "lockouts": 0
  }
}
```

#### 2. Degraded State — Redis Unavailable (`GET /health` → `503 Service Unavailable`)

When Redis is not running or unreachable, the server logs a warning and continues running in degraded mode:

```json
{
  "status": "degraded",
  "uptime": 45,
  "timestamp": "2026-11-14T15:30:00.000Z",
  "checks": {
    "database": {
      "status": "healthy",
      "latency": 2
    },
    "redis": {
      "status": "unhealthy",
      "error": "Connection is closed",
      "latency": 1
    }
  },
  "auth": {
    "activeSessions": 0,
    "failedAttempts": 0,
    "lockouts": 0
  }
}
```

#### 3. Degraded State — Database Connection Failure (`GET /health` → `503 Service Unavailable`)

When PostgreSQL is unreachable or connection is refused:

```json
{
  "status": "degraded",
  "uptime": 12,
  "timestamp": "2026-11-14T15:30:00.000Z",
  "checks": {
    "database": {
      "status": "unhealthy",
      "error": "Can't reach database server at localhost:5432",
      "latency": 1005
    },
    "redis": {
      "status": "healthy",
      "latency": 1
    }
  },
  "auth": {
    "activeSessions": 0,
    "failedAttempts": 0,
    "lockouts": 0
  }
}
```

#### 4. Root & API Directory Endpoints

```bash
# Root welcome endpoint
curl -s http://localhost:4000/
# Response:
# {"message":"Welcome to Niraksh Guardian API"}

# API directory endpoint
curl -s http://localhost:4000/api
# Response:
# {"/":"/","api":"/api","auth":"/api/auth","chats":"/api/chats",...}
```

---

## 🔧 Troubleshooting Local Setup

### 1. Database Connection Failures

**Symptoms:**
- Server crashes on startup with `PrismaClientInitializationError: Can't reach database server at localhost:5432` or error code `P1001`.
- `/health` returns `checks.database.status: "unhealthy"` with HTTP 503.

**Actionable Steps:**
1. Check that PostgreSQL is installed and actively running:
   - **Docker:** `docker ps` (start container: `docker run --name niraksh-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres`)
   - **Linux/macOS:** `sudo systemctl status postgresql` or `brew services list`
   - **Windows:** Check `Services` app or run `Get-Service -Name postgresql*` in PowerShell.
2. Verify connection string in `backend/.env`:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/niraksh_guardian?schema=public
   ```
   *Note:* If using Prisma Accelerate, configure `DIRECT_DATABASE_URL` with your direct connection string.
3. Test connectivity with the built-in database verification script:
   ```bash
   pnpm tsx verify-db.ts
   ```
4. Run Prisma migrations and seed the database:
   ```bash
   pnpm prisma generate
   pnpm prisma:migrate
   pnpm seed
   ```

### 2. Redis Connection Failures

**Symptoms:**
- Console log warning: `Redis unavailable. Continuing in degraded mode without cache`.
- `/health` returns `checks.redis.status: "unhealthy"` and `status: "degraded"`.

**Actionable Steps:**
1. Verify Redis is running on port 6379:
   - **Docker:** `docker run --name niraksh-redis -p 6379:6379 -d redis:alpine`
   - **Linux/macOS:** `sudo systemctl status redis` or `brew services list`
   - **CLI Ping:** Run `redis-cli ping` (expected output: `PONG`).
2. Verify `REDIS_URL` in `backend/.env`:
   ```env
   REDIS_URL=redis://localhost:6379
   ```
3. *Note:* The backend automatically retries connecting to Redis every 30 seconds. Development on endpoints that do not strictly require caching can still proceed while Redis is disconnected.

### 3. Missing Environment Variables (`ZodError`)

**Symptoms:**
- Startup aborts immediately with:
  ```text
  ZodError: [
    { "code": "invalid_type", "expected": "string", "received": "undefined", "path": ["DATABASE_URL"], "message": "Required" }
  ]
  ```

**Actionable Steps:**
1. Ensure `.env` exists in the `backend/` directory:
   ```bash
   cd backend
   cp .env.example .env
   ```
2. Required variables that must be non-empty strings:
   - `DATABASE_URL`
   - `JWT_SECRET` (e.g. `dev_jwt_secret_min32chars_for_local_testing`)
   - `JWT_REFRESH_SECRET` (e.g. `dev_jwt_refresh_secret_min32chars_for_local_testing`)
3. Optional variables (Google OAuth, Gemini API, Cloudinary, AWS SES) are only required when testing their respective features (AI analysis, image upload, email delivery).

### 4. Port Conflicts (`EADDRINUSE: :::4000`)

**Symptoms:**
- Error on startup: `Error: listen EADDRINUSE: address already in use :::4000`.

**Actionable Steps:**
1. Find and terminate the process using port 4000:
   - **Windows (PowerShell):**
     ```powershell
     netstat -ano | findstr :4000
     Stop-Process -Id <PID> -Force
     ```
   - **Linux / macOS:**
     ```bash
     lsof -i :4000
     kill -9 <PID>
     # Or one-liner:
     npx kill-port 4000
     ```
2. Alternatively, specify a different port in `backend/.env`:
   ```env
   PORT=4001
   ```
   Remember to update `NEXT_PUBLIC_API_URL` in `frontend/.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4001/api
   ```


## 📚 Architecture Overview

Dive deeper into our backend architecture, database schemas, and AI engineering patterns:

- [Backend System Design](./SYSTEM_DESIGN.md)
- [Database Schema Guide](./DATABASE_SCHEMA.md)
- [Health Data Retention & Cleanup Runbook](../docs/RETENTION_AND_CLEANUP.md)
- [AI Safety Evaluation & Regression Guide](../docs/AI_SAFETY_EVALUATION.md)

### Current care-coordination API

Patient endpoints are mounted under `/api/appointments` and `/api/clinical-intake`. Doctor workspace endpoints are mounted under `/api/doctor` and require an authenticated doctor; patient-facing doctor access requires an approved professional profile.

| Capability | Endpoint | Notes |
|---|---|---|
| Available slots | `GET /api/appointments/doctors/:doctorId/slots?date=YYYY-MM-DD` | Generates unbooked slots from weekly IST availability windows |
| Request appointment | `POST /api/appointments` | Creates `REQUESTED` appointment for an approved, available doctor |
| Patient appointments | `GET /api/appointments/mine` | Includes doctor-issued prescription and clinical-intake status when available |
| Cancel appointment | `PATCH /api/appointments/:id/cancel` | Also revokes the appointment access grant |
| Read/save intake | `GET/POST /api/clinical-intake` | Draft or submit appointment-linked HPI/ROS and consent |
| Revoke consent | `POST /api/clinical-intake/:id/revoke-consent` | Stops the intake from being shared with the doctor |
| Patient timeline | `GET /api/clinical-intake/timeline` | Merges persisted clinical events |
| Doctor appointments | `GET /api/doctor/appointments` | Approved doctors only |
| Doctor availability | `GET/PUT /api/doctor/availability` | Replace weekly booking windows |
| Patient record | `GET /api/doctor/patients/:patientId` | Requires active, unexpired patient access |
| Review intake | `PATCH /api/doctor/patients/:patientId/clinical-intake/:intakeId/summary` | Saves a doctor-edited summary |
| Safety check | `POST /api/doctor/patients/:patientId/pre-prescription-check` | Checks proposed medicines before prescribing |
| Issue prescription | `POST /api/doctor/patients/:patientId/prescriptions` | Requires a completed safety check |

## 🛠️ Scripts

- `pnpm dev`: Starts the development server with nodemon
- `pnpm build`: Compiles TypeScript to JavaScript
- `pnpm start`: Runs the built application
- `pnpm lint`: Runs ESLint
- `pnpm format`: Runs Prettier
- `pnpm prisma:migrate`: Runs Prisma migrations
- `pnpm seed`: Seeds the database with initial data
- `pnpm retention:cleanup`: Runs scheduled health-data retention and cleanup jobs
- `pnpm retention:dry-run`: Safe dry-run inspection of retention targets without DB or CDN mutations
- `pnpm test:retention`: Executes the automated retention test suite
- `pnpm test:ai-safety`: Runs the automated AI safety evaluation & regression test suite
- `pnpm eval:ai-safety`: Runs the AI safety evaluation CLI runner in offline mock mode
- `pnpm eval:ai-safety:live`: Opt-in live evaluation against the live Gemini model
