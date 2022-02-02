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

function parse(equation) {
  if (equation.match(MULTIPLY_DIVIDE_REGEX)) {
    handleMath(equation.match(MULTIPLY_DIVIDE_REGEX).groups)
  }
}

function handleMath({ operand1, operand2, operation }) {
  const number1 = parseFloat(operand1)
  const number2 = parseFloat(operand2)

  switch (operation) {
    case "*":
      return number1 * number2
    case "/":
      return number1 / number2
  }
}
