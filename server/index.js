const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const c = require('./controller')


const url = '/api/food/'

app.get(url, c.getFood)
app.post(url, c.create)
app.put(`${url}:id`, c.update)
app.delete(`${url}:id`, c.delete)


app.listen(5050, () => {
    console.log("It's taco time on port 5050");
  });