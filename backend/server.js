const express = require('express');
const cors = require('cors');
const {readdirSync} = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

//Middleware Configuration
app.use(cors('*'));
app.use(express.json());



//DB Configuration
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log("DB Connection Error",err);
});


//Route Configuration
readdirSync('./Routes').map((r)=>app.use('/api',require(`./Routes/${r}`)));

app.get("/" ,(req,res)=>{
    res.status(200).send("<h1>Super ra bittu</h1>");
})


const PORT = process.env.PORT ||8000;
app.listen(PORT,()=>{
    console.log(`server listening @ ${PORT}`);
})