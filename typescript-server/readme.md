# typescript-server

A lightweight backend server built with **TypeScript**, **Node.js**, and **Express**, demonstrating a clean project structure, type-safe route handlers, and a standard development-to-production workflow.

## Overview

This project sets up a minimal REST API server that showcases core backend fundamentals: routing, JSON responses, environment configuration, and a compiled build pipeline. It's intended as a foundation for building out larger backend services or APIs.

## Tech Stack

- **Node.js** — JavaScript runtime
- **TypeScript** — static typing for safer, more maintainable code
- **Express** — minimal, unopinionated web framework
- **tsx** — fast TypeScript execution with hot reload during development

## Features

- Type-safe route handlers using Express and TypeScript
- JSON request/response handling
- Health check endpoint (`/api/health`) for monitoring server status
- Separate development (`tsx watch`) and production (compiled `tsc`) workflows

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS recommended)

### Installation

```bash
git clone https://github.com/<your-username>/typescript-server.git
cd typescript-server
npm install
```

### Running in Development

```bash
npm run dev
```

The server will start at `http://localhost:3000` and restart automatically on file changes.

### Building for Production

```bash
npm run build
npm start
```

## API Endpoints

| Method | Endpoint       | Description                          |
|--------|----------------|---------------------------------------|
| GET    | `/`            | Returns a basic welcome message       |
| GET    | `/api/health`  | Returns server status and timestamp   |

## Project Structure

```
typescript-server/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Roadmap

- [ ] Add POST/PUT/DELETE routes for full CRUD support
- [ ] Integrate a database (e.g., PostgreSQL or MongoDB)
- [ ] Add request validation and error-handling middleware
- [ ] Add automated tests

## License

MIT
