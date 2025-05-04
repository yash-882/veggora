// loads private variables in node environment
import dotenv from "dotenv"; 
dotenv.config({path: "../file.env"})

import app from "./app.js"; //main app
import mongoose from "mongoose"; 

// Mongo database connection
mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=> {
  console.log("Connected to MongoDB")
})
.catch(err => {
  console.log(err);
  process.exit(1); //close the server if connection error occurs
})

// listening to port
app.listen(process.env.PORT, ()=> console.log("Listening to the port..."))
