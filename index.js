require('@google-cloud/debug-agent').start({
  allowExpressions :true,
  serviceContext: {
    service: 'my-app',
    version: 'V1.0',
    enableCanary: true,

  }
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var test =req.query.test;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  