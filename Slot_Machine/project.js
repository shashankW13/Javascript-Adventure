const prompt = require("prompt-sync")()

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter the amount you want to deposit: ")
    const numberDepositAmount = parseFloat(depositAmount)

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again")
    } else return numberDepositAmount
  }
}

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines you want to bet (1-3): ")
    const numberOfLines = parseInt(lines)

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again")
    } else return numberOfLines
  }
}

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ")
    const betAmount = parseInt(bet)

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / 3) {
      console.log("Invalid bet, try again")
    } else return betAmount
  }
}

let balance = deposit()
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines)
console.log(balance)
console.log(numberOfLines)
