module.exports = (number, primeFactors) => `
  <head>
    <link rel="stylesheet" href="styles/main.css"/>
    <style>
      body {font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', sans-serif}
    </style>
  </head>
  ${primeFactors
    ? `${number === 1 || primeFactors.length === 1 && primeFactors[0] === number
      ? `<h1>${number} is a prime number</h1>`
      : `<h1>${number} is not a prime number.</h1><p>It is divisable by the prime factors
      ${primeFactors.length > 1 ? `${primeFactors.slice(0, -1).join(', ')}, and` : ''}
      ${primeFactors[primeFactors.length - 1]}.</p>`
    }`
    : `<h1>${number} is not a number</h1>`
  }
  <form action="/" method="get">
    <label>
    Enter number
    <br>
    <input value="${number}" name="n" type="text">
    </label>
    <p><button type="submit">Is this a prime number?</button></p>
  </form>
`
