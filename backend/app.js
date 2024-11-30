import express from "express";
import {config} from 'dotenv';
import cors from 'cors';
config({ path: "./config/config.env" });
import { dbConnection } from "./database/dbConnection.js";


//import routers
import studentRouter from './routes/studentRoutes.js';
import eventRouter from './routes/eventsRouters.js';

import teacherRoute from './routes/teacherRoute.js';
import LibraryRouter from './routes/LibraryRouter.js';

import examRoute from './routes/examRoute.js';

import classRoute from './routes/classRoute.js';

import attendanceRouter from './routes/attendanceRouter.js';

import assigmentRouter from './routes/assigmentRouter.js';
import announcementRouter from './routes/announcementRouter.js';






import { errorHandler } from "./middleware/errorHandler.js";
const app = express();






(async () => {
  try {
    await dbConnection();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
})();


app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});




// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     model:["GET","POST","PUT","DELETE"],
//   })
// );


app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // If you use cookies/authentication
  })
);








app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/students",studentRouter);
app.use("/api/v1/teachers",teacherRoute);

app.use("/api/v1/assigment",assigmentRouter);


app.use("/api/v1/announcements", announcementRouter);



app.use("/api/v1/class", classRoute);



app.use("/api/v1/library",LibraryRouter);




app.use("/api/v1/exam", examRoute);


app.use("/api/v1/attendance", attendanceRouter);



app.use("/api/v1/events",eventRouter);


app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});



export default app;
