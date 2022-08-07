const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');
const connectDB = require('./config/db');

//app
const app = express();

//connect DB
//mongoose.connect(process.env.DATABASE).then(()=> console.log('DB connected.'))
//        .catch((err)=> console.log('DB connect Err ', err))
connectDB()

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"20mb"}));
app.use(cors());

// routes
readdirSync('./routes')
    .map((r)=>app.use("/api",require('./routes/'+r)));


// Server up
const port = process.env.PORT;
//const port = 4000;
app.listen(port, ()=>console.log(`Server is running on port ${port}.`));