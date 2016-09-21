const express = require('express')
const app = express()

app.get('/:id', (req, res, next) => {
  const input = req.originalUrl.substring(1)

  if (parseInt(input, 10)) {
    res.send(`${input} is a number`)
  } else {
    res.status(400).send(`${input} is not a number`)
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
