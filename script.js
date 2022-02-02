const form = document.querySelector("#equation-form")
const inputElement = document.querySelector("#equation")
const outputElement = document.querySelector("#results")

form.addEventListener("submit", e => {
  e.preventDefault()

  const result = parse(inputElement.value)
  outputElement.textContent = result
})

function parse(equation) {}
