import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import {fileURLToPath} from 'url';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import {register} from "./controllers/auth.js"
import {createPost} from "./controllers/posts.js"
import { verifytoken } from './middleware/auth.js';
import User from './models/user.js';
import Post from './models/Post.js';
import {users,posts} from './data/index.js';



// MIDDLEWARE CONFIGURATION AND PACKAGE CONFIG

const __filename= fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
dotenv.config();
const app=express();

const corsOptions = {                      //
  origin: 'http://localhost:3000'          //
};                                         //                    This was not present in actual source 
// Enable CORS middleware                  //
app.use(cors(corsOptions));                //  

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  }));
  app.use(morgan("common"));
  app.use(express.json({limit:"30mb",extended:true}));
  app.use(express.urlencoded({limit:"30mb",extended:true}));

  app.use("/assets",express.static(path.join(__dirname,'public/assets')));

  //STORING OF FILES
  const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "public/assets");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
  });
  const upload=multer({storage});



// ROUTES WITH FILES
app.post("/auth/register",upload.single("picture"),register);
app.post("/posts",verifytoken,upload.single("picture"),createPost);


//ROUTES
app.use("/auth",authRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes);



  //MONGOOSE SETUP
 const PORT = process.env.PORT || 6001;
console.log(PORT);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    //ADD DATA ONLY ONCE
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

