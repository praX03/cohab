import * as dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";

const url = process.env.DB_URI;
connect(url)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
