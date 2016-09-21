const express = require('express')
const getPrimeFactors = require('get-prime-factors')
const app = express()

app.get('/', (req, res, next) => {
  const input = req.param('n')

  if (parseInt(input, 10)) {
    if (getPrimeFactors(input).length > 1) {
      const primeFactors = [...new Set(getPrimeFactors(input))] // Dedupe prime factors
      res.send(`
        <form action="/" method="get">
        <input value="${input}" name="n" type="text">
        is divisable by
        ${primeFactors.length > 1 ? `${primeFactors.slice(0, -1).join(', ')}, and` : ''}
        ${primeFactors[primeFactors.length - 1]}
        </form>
      `)
    } else {
      res.send(`${input} is a prime number`)
    }
  } else {
    res.status(400).send(`${input} is not a number`)
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
