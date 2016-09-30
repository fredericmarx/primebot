module.exports = (number, primeFactors) => `
  <head>
    <link rel="stylesheet" href="styles/main.css">
  </head>
  <div class="max-width-2 mx-auto">
    ${primeFactors
      ? `${primeFactors.length === 1 && primeFactors[0] === number
        ? `<h1>${number} is a prime number</h1>`
        : `<h1>${number} is not a prime number.</h1>

        ${number !== 1
          ? `<p>It is divisable by the prime
          factor${primeFactors.length > 1
            ? `s ${primeFactors.slice(0, -1).join(', ')}, and` : ''
          }
          ${primeFactors[primeFactors.length - 1]}.
          </p>`
          : ''}`
      }`
      : `<h1>${number} is not a number</h1>`
    }
    <p>A prime number is a natural number greater than 1 that can only be divided by 1 and itself.</p>
    <form action="/" method="get">
      <label for="n" class="label">Enter a number</label>
      <input value="${number + 1}" name="n" id="n" type="text" class="input">
      <input type="submit" class="btn btn-primary" value="Is this a prime number?">
    </form>
  </div>
`
