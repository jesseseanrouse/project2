import React, { useState, useEffect } from "react"
// Import Components
import Reactant from "./balanceComponents/Reactants"
import Result from './balanceComponents/Result'

import { array } from "prop-types"
// Import Arrays with letters/numbers/()
import NumbersArr from "./balanceComponents/NumbersArray"
import UpperArr from "./balanceComponents/UpperArr"
import LowerArr from "./balanceComponents/LowerArr"
import ParArr from "./balanceComponents/ParArr"
// Import Functions
// import CompoundCheck from "./functions/CompoundCheck"

const Balance = props => {
  // console.log(props)
  const [value, setValue] = useState("")
  const [equation, setEquation] = useState([])
  const [reactantElements, setReactantElements] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const handleClickAdd = e => {
    // To prevent any shenanigans
    e.preventDefault()
    // To get a list of symbols to verify that entered values are elements
    const symbols = props.data.map(ele => {
      return { symbol: ele.symbol }
    })
    // Sets error to ""
    setErrorMessage("")
    // console.log(symbols)

    // Set up function call
    // CompoundCheck(value)

    // Now for the fun part
    let i = 0
    // to track an error
    let flag = 0
    // Temp Stuff
    let ele = ''
    let eleAmount = ''
    let tempArr = []
    let index = 0
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
        } 
        // Check for UpperCase which is the start of an element
      } else if (UpperArr.some(letter => letter === value.charAt(i))) {
        // console.log("Checked UpperCase" + value.charAt(i))
        let symbolCheck = false
        let element = ""
        // This is for looking into the future
        let i2 = i + 1
        let i3 = i + 2
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
                step = 3
            } else {
                eleAmount = 1
                step = 2
            }
        } else {
            if (NumbersArr.some(number => number === value.charAt(i2))) {
                eleAmount = value.charAt(i2)
                step = 2
            } else {
                eleAmount = 1
            }
        }
        // Now to check if it is even an element
        if (symbols.some(symbol => symbol.symbol === element)) {
            ele = element
            tempArr.push({element: ele, amount: eleAmount})
            index++
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
      let array = equation
      array.push(value)
      setEquation(array)
      setReactantElements(tempArr)
      setValue("")
    }
  }
  const handleChange = e => {
    const string = e.target.value
    setValue(string)
  }
  const Reactants = equation.map((ele, index) => {
    return <Reactant name={ele} key={index} />
  })
  const Results = reactantElements.map((ele, index) => {
      return <Result element={ele.element} amount={ele.amount}/>
  })
  return (
    <>
      <section>
        <form>
          <input
            type="text"
            placeholder="Compound"
            value={value}
            onChange={handleChange}
          />
          <button onClick={handleClickAdd}>Reactant</button>
          <button>Product</button>
          <button>Done</button>
          <button>Reset</button>
        </form>
        <div>{errorMessage}</div>
        {Reactants}
        {Results}
      </section>
    </>
  )
}

export default Balance
