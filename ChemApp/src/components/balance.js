import React, { useState } from "react"
// Import Components
import Reactant from "./balanceComponents/Reactants"
import Result from "./balanceComponents/Result"

// Import Functions
import compoundCheck from "./functions/compoundCheck"

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

    // Set up function call
    compoundCheck(value, setErrorMessage, symbols, equation, setEquation, reactantElements, setValue, setReactantElements)
  }
  const handleChange = e => {
    const string = e.target.value
    setValue(string)
  }
  const Reactants = equation.map((ele, index) => {
    return <Reactant name={ele} key={index} />
  })
  const Results = reactantElements.map((ele, index) => {
    return <Result element={ele.element} amount={ele.amount} key={index} />
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
