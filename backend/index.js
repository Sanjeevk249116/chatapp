const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { router } = require("./routesPart/router");
const { connection } = require("./config/connection");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("",router);


app.listen(process.env.PORT,async()=>{
  try{
       await connection;
       console.log("connection")    
  }catch(err){
      console.log(`server is not connect with ${process.env.PORT} port`)
  }
  console.log(`server is connected with port ${process.env.PORT} data base`)
})
