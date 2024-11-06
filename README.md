# PSh-Game

A simple web application that simulates player statistics for an online game. The project consists of a backend (Node.js) and a frontend (React).

## Project Structure

```bash
psh-game/
├── backend/    # Backend API (Node.js, Express, MySQL)
└── frontend/   # Frontend App (React, Vite, TypeScript)
```

## Backend

The backend handles:
* Player statistics generation and storage in a MySQL database.
* A cron job to generate new stats every 5 minutes.
* API endpoints to retrieve top player scores.

### Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Run the backend:
   ```bash
   yarn dev
   ```

## Frontend

The frontend displays:
* Top 10 player scores.
* The last stats generation time.
* A button to export the report to CSV.

### Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Run the frontend:
   ```bash
   yarn dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

## Notes

Ensure the backend ([http://localhost:3000](http://localhost:3000)) and frontend ([http://localhost:5173](http://localhost:5173)) are running concurrently.