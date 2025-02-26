//console.log("cio")

import express from 'express';

const app= express();
const port= 3000;
app.get('/', (req,res)=>{
    res.send("ciao da express")
})

app.listen(port, () =>{
    console.log("server in ascolto sulla porta: "+port)
})