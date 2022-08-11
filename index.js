const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({
        msg: 'API is working'
    })
})

app.get('/product', (req, res)=>{
    res.send({
        name: 'HP Laptop',
        price: 4000,
        category: "Electronics",
        tags: ['electronics', 'monitor', 'hp']
    })
})

app.listen(5000, ()=>{
    console.log("App is running in port 5000")
})