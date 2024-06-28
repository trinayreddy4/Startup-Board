const express = require('express');
const cors = require('cors');
const {readdirsync} = require('fs');
const app = express();

app.use(cors('*'));

//Route Configuration
readdirsync('./Routes').map((r)=>app.use('/api',require(`./Routes/${r}`)));

app.get("/" ,(req,res)=>{
    res.status(200).send("<h1>Super ra bittu</h1>");
})

app.listen(8080,()=>{
    console.log(`server listening @ ${3001}`);
})