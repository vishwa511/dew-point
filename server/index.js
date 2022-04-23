const express = require('express')
require('./db/config');
const User = require("./db/User")
const app  = express();

app.post("/register",(req,resp)=>{
	resp.send("api in progress...")
})

app.listen(1337, ()=> {
	console.log('server is started on 1337')
})