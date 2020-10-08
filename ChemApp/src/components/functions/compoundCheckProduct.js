// Import Arrays with letters/numbers/()
import NumbersArr from "../balanceComponents/NumbersArray"
import UpperArr from "../balanceComponents/UpperArr"
import LowerArr from "../balanceComponents/LowerArr"
import ParArr from "../balanceComponents/ParArr"
//Import Functions
import elementDuplicate from "./elementDuplicateProduct"

export default function compoundCheck(
  value,
  setErrorMessage,
  symbols,
  equation,
  setEquation,
  resultElements,
  setValue,
  setResultElements,
  setDone,
  mathProduct,
  setMathProduct
) {
  // Now for the fun part
  let i = 0
  // to track an error
  let flag = 0
  // Temp Stuff
  let eleAmount = ""
  let tempArr = []
  while (i < value.length) {
    //   console.log("Loop " + i)
    let step = 1
    // First Check is numbers why is explained after the check
    if (NumbersArr.some(number => number === value.charAt(i))) {
      // console.log("Checked Number")
      // Cannot start with a number, the point is to balance
      if (i === 0) {
        flag = 1
        setErrorMessage("Can not start with a number")
        break
      } else {
        flag = 1
        setErrorMessage("Your number is too big")
        break
      }
      // Check for UpperCase which is the start of an element
    } else if (UpperArr.some(letter => letter === value.charAt(i))) {
      // console.log("Checked UpperCase" + value.charAt(i))
      let symbolCheck = false
      let element = ""
      // This is for looking into the future
      let i2 = i + 1
      let i3 = i + 2
      let i4 = i + 3
      let i5 = i + 4
      // checks the next letter to see if it is LowerCase
      if (LowerArr.some(letter => letter === value.charAt(i2))) {
        symbolCheck = true
      }
      // Establish Element
      if (symbolCheck === true) {
        element = value.charAt(i) + value.charAt(i2)
      } else {
        element = value.charAt(i)
      }
      // Check for amount
      if (symbolCheck === true) {
        if (NumbersArr.some(number => number === value.charAt(i3))) {
          eleAmount = value.charAt(i3)
          if (NumbersArr.some(number => number === value.charAt(i4))) {
            eleAmount = eleAmount + value.charAt(i4)
            if (NumbersArr.some(number => number === value.charAt(i5))) {
              eleAmount = eleAmount + value.charAt(i5)
              step = 5
            } else {
              step = 4
            }
          } else {
            step = 3
          }
        } else {
          eleAmount = 1
          step = 2
        }
      } else {
        if (NumbersArr.some(number => number === value.charAt(i2))) {
          eleAmount = value.charAt(i2)
          if (NumbersArr.some(number => number === value.charAt(i3))) {
            eleAmount = eleAmount + value.charAt(i3)
            if (NumbersArr.some(number => number === value.charAt(i4))) {
              eleAmount = eleAmount + value.charAt(i4)
              step = 4
            } else {
              step = 3
            }
          } else {
            step = 2
          }
        } else {
          eleAmount = 1
        }
      }
      // Now to check if it is even an element
      if (symbols.some(symbol => symbol.symbol === element)) {
        tempArr.push({ element: element, amountR: 0, amountP: eleAmount})
      } else {
        flag = 1
        setErrorMessage("You did not enter a valid element")
        break
      }
    } else {
      flag = 1
      setErrorMessage("Not a valid entry")
      break
    }
    i = i + step
  }
  // Final Check
  if (flag === 0) {
    // equation set up
    let array = equation
    if (array.length > 0) {
      array.push(" + ")
    }
    array.push(value)
    setEquation(array)
    // Products Math Set up
    let math= true
    elementDuplicate(tempArr, setMathProduct, math, mathProduct)
    //   Result set up
    math = false
    let array2 = resultElements
    array2.push(...tempArr)
    elementDuplicate(array2, setResultElements, math, mathProduct)
    setDone(true)
    setValue("")
  }
  return
}
