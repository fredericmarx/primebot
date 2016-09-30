const getPrimeFactors = require('get-prime-factors')

module.exports = (number, primeFactors) => `
<html lang="en">
  <meta charset="utf-8">
  <title>${number} — Primebot</title>
  <meta name="description" content="Find prime numbers">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="styles/main.css">
  <div class="bg-white stage">
  <svg role="presentation" viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">
    ${(function () {
      let string = ''
      const drawnFactors = []
      const numbers = [
        number - 3,
        number - 2,
        number - 1,
        number,
        number + 1,
        number + 2,
        number + 3
      ]
      numbers.map((number, numberIndex) => {
        const numberPosition = (numberIndex + 1) * 10 - 5

        getPrimeFactors(number).map((factor) => {
          if (!drawnFactors.includes(factor)) {
            const circleCount = 9
            const radius = factor * 5

            for (let i = 0; i < circleCount; i++) {
              string += `<circle fill="none" stroke="#F012BE" stroke-width=".1" stroke-opacity="${(1 / factor) / 2 + 0.15}" cx="${(i * 2 * radius) - radius + numberPosition}" cy="35" r="${radius}"/>`
            }
            drawnFactors.push(factor)
          }
        })
      })
      numbers.map((number, index) => {
        string += `<text x="${index * 10 + 5}" text-anchor="middle" width="10" y="${35 + 1}" font-size="2" style="text-align: center">${number}</text>`
      })
      return string
    })()}
  </svg>
    <main class="max-width-2 mx-auto px1 py2">
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
      <p>A prime number is any natural number greater than 1 that can only be divided by 1 and itself.</p>
      <form class="mt2" action="/" method="get">
        <label for="n" class="label">Enter a number</label>
        <input value="${number + 1}" name="n" id="n" type="text" class="input" onInput="btn()">
        <input type="submit" class="btn btn-primary" id="s" value="Is this a prime number?">
      </form>
    </main>
  </div>
  <footer class="px1 py2">
    <div class="max-width-2 mx-auto">
      Built by <a href="https://twitter.com/fredericmarx">@fredericmarx</a> using <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://www.npmjs.com/">npm</a>, <a href="https://expressjs.com/">Express</a>, and the <a href="http://www.basscss.com/">Basscss</a> toolkit. Prime factors are generated with <a href="https://www.npmjs.com/package/get-prime-factors">get-prime-factors</a> by <a href="https://www.npmjs.com/~janjarfalk">janjarfalk</a>.
    </div>
  </footer>
  <script>
    function btn () {
      document.getElementById('s').value = 'Is ' + document.getElementById('n').value + ' a prime number?'
    }

    btn()
  </script>
`
