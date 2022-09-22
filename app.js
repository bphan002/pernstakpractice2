const express = require('express')

const app = express()
const cats = require('./routes/cats')

app.use("/pets",cats) //this is saying any /pets endpoint(1st parameter) will use the cats.js file that we have already have a route variable for
app.use(express.json()) //checks if your request are json and converting them into objects

port = process.env.port || 5000

app.listen(port, ()=> {
    console.log(`we are on ${port}`)
})


app.get('/', (req,res) => {
    res.send('we hit the home page')
})