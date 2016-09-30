module.exports = (number) => `
<html lang="en">
  <meta charset="utf-8">
  <title>${number} — Primebot</title>
  <meta name="description" content="Find prime numbers">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link rel="icon" href="apple-touch-icon.png">
  <link rel="stylesheet" href="styles/main.css">
  <body class="bg-silver">
  <div class="bg-white">
    <main class="max-width-2 mx-auto px1 py2 mt-big">
      <h1>Sorry, but ${number} is too big :(</h1>
      <p>Calculating prime numbers is hard. I can only analyse smaller numbers.</p>
      <p>A prime number is any natural number greater than 1 that can only be divided by 1 and itself.</p>
      <form class="mt2" action="/" method="get">
        <label for="n" class="label">Enter a number</label>
        <input value="7" name="n" id="n" type="text" class="input" onInput="btn()">
        <input type="submit" class="btn btn-primary" id="s" value="Is this a prime number?">
      </form>
    </main>
  </div>
  <footer class="px1 py2">
    <div class="max-width-2 mx-auto">
      Built by <a href="https://twitter.com/fredericmarx/status/775998450869624832">@fredericmarx</a> using <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://www.npmjs.com/">npm</a>, <a href="https://expressjs.com/">Express</a>, and the <a href="http://www.basscss.com/">Basscss</a> toolkit. Prime factors are generated with <a href="https://www.npmjs.com/package/get-prime-factors">get-prime-factors</a> by <a href="https://www.npmjs.com/~janjarfalk">janjarfalk</a>. <a href="https://github.com/fredericmarx/primebot">View on Github</a>.
    </div>
  </footer>
  <script>
    function btn () {
      document.getElementById('s').value = 'Is ' + document.getElementById('n').value + ' a prime number?'
    }

    btn()
  </script>
`
