const express=require('express');
const router = require("./router/router");
const bp = require("body-parser");
const cors = require("cors");

const app=express();
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
const port=3001;
const host="localhost";


app.use('/', router)
app.listen(port, host, ()=>{
    console.log(`server running in ${host}:${port}`);
})