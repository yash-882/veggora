import express from "express";
const app = express(); 
import cors from "cors"; 

//allowing frontend to interact
app.use(cors({
    origin: 'http://localhost:5173', 
  }));

// parses json data
app.use(express.json());
  
export default app;