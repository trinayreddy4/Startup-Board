const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors('*'));

app.get("/" ,(req,res)=>{
    res.status(200).send("<h1>Super ra bittu</h1>");
})

app.listen(8080,()=>{
    console.log(`server listening @ ${3001}`);
})