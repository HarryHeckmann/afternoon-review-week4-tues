const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const tc = require('./controller')


const url = '/api/tacos/'

app.get(url, tc.getTacos)
app.post(url, tc.create)
app.put(`${url}:id`, tc.update)
app.delete(`${url}:id`, tc.delete)


app.listen(5050, () => {
    console.log("It's taco time on port 5050");
  });