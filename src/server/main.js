import * as dotenv from "dotenv";
dotenv.config();
import ViteExpress from "vite-express";
import express, { json } from "express";
import cors from "cors";
import user from "./routes/user.js";
import "./db/ConnectDB.js";

const port = process.env.PORT;

const app = express();
app.use(json());
app.use(cors());
app.use("/api/", user);

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
