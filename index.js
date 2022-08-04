const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('HomePage')
})

app.listen(5000, ()=>{
    console.log("App is running in port 5000")
})