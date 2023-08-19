const prompt = require("prompt-sync")()

const ROWS = 3
const COLS = 3

const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
}

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
}

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

const spin = () => {
  const symbols = []

  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol)
    }
  }

  const reels = [[], [], []]

  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols]
    console.log(reelSymbols)
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length)
      const selectedSymbol = reelSymbols[randomIndex]
      reels[i].push(selectedSymbol)
      reelSymbols.splice(randomIndex, 1)
    }
  }

  return reels
}

const reels = spin()
console.log(reels)
// let balance = deposit()
// const numberOfLines = getNumberOfLines()
// const bet = getBet(balance, numberOfLines)
// console.log(balance)
// console.log(numberOfLines)
