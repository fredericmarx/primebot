const express = require('express')
const getPrimeFactors = require('get-prime-factors')
const template = require('./template')
const path = require('path')
const app = express()
const postcssMiddleware = require('postcss-middleware')
const postcssImport = require('postcss-import')
const postcssCustomProperties = require('postcss-custom-properties')
const postcssColorFunction = require('postcss-color-function')
const compression = require('compression')
const cssnano = require('cssnano')

app.use(compression({
  level: 1
}))

app.use('/styles', postcssMiddleware({
  src: (req) => {
    return path.join('styles', req.path)
  },
  plugins: [
    postcssImport,
    postcssCustomProperties,
    postcssColorFunction,
    cssnano
  ],
  options: {
    from: 'styles/main.css'
  }
}))

app.get('/', (req, res, next) => {
  const number = parseInt(req.param('n'), 10)
  const primeFactors = [...new Set(getPrimeFactors(number))] // Dedupe prime factors

  if (parseInt(number, 10)) {
    res.send(template(number, primeFactors))
  } else {
    res.status(400).send(template(number))
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
