import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello! My server is running 🚀");
});

// A JSON route (typical for APIs)
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});