import express from "express";
const app = express(); 
import cors from "cors"; 
import adminRoute from "./routes/admin/main-router.js"
import qs from 'qs'

//allowing frontend to interact
app.use(cors({
    origin: 'http://localhost:5173', 
  }));
  
  app.set('query parser', (queryString) => {
    return qs.parse(queryString)
  })

// parses json data
app.use(express.json());

app.use("/api/admin", adminRoute);
   
export default app;