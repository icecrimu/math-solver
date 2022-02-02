const form = document.querySelector("#equation-form")
const inputElement = document.querySelector("#equation")
const outputElement = document.querySelector("#results")

const MULTIPLY_DIVIDE_REGEX =
  /(?<operand1>\d+)\s*(?<operation>[\*\/])\s*(?<operand2>\d+)/

form.addEventListener("submit", e => {
  e.preventDefault()

  const result = parse(inputElement.value)
  outputElement.textContent = result
})

function parse(equation) {}
