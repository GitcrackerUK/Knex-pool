const timeout = require('express-timeout-handler');
const express = require('express');
const router = require('./routes')
const app = express()
const port = 3000


app.use(express.json())
app.use(router)
app.use(timeout.handler());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})