import React, { useState } from "react"
// Import Components
import Reactant from "./balanceComponents/Reactants"
import Result from "./balanceComponents/Result"
import Product from './balanceComponents/Products'

// Import Functions
import compoundCheckReactants from "./functions/compoundCheckReactants"
import compoundCheckProducts from './functions/compoundCheckProduct'

const Balance = props => {
  // console.log(props)
  const [value, setValue] = useState("")
  const [equationReact, setEquationReact] = useState([])
  const [equationProduct, setEquationProduct] = useState([])
  const [resultElements, setResultElements] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [done, setDone] = useState(false)
  const [reactantMath, setReactantMath] = useState([])
  const [productMath, setProductMath] = useState([])
  //   For Reactants
  const handleClickReactant = e => {
    // To prevent any shenanigans
    e.preventDefault()
    // To get a list of symbols to verify that entered values are elements
    const symbols = props.data.map(ele => {
      return { symbol: ele.symbol }
    })
    // Sets error to ""
    setErrorMessage("")
    // Set up function call
    compoundCheckReactants(
      value,
      setErrorMessage,
      symbols,
      equationReact,
      setEquationReact,
      resultElements,
      setValue,
      setResultElements,
      setDone,
      reactantMath,
      setReactantMath
    )
  }
  //   ForProducts
  const handleClickProduct = e => {
    // To prevent any shenanigans
    e.preventDefault()
    // To get a list of symbols to verify that entered values are elements
    const symbols = props.data.map(ele => {
      return { symbol: ele.symbol }
    })
    // Sets error to ""
    setErrorMessage("")
    // Set up function call
    compoundCheckProducts(
      value,
      setErrorMessage,
      symbols,
      equationProduct,
      setEquationProduct,
      resultElements,
      setValue,
      setResultElements,
      setDone,
      productMath,
      setProductMath
    )
  }
//   This is for input box
  const handleChange = e => {
    const string = e.target.value
    setValue(string)
  }
//   This creates the Reactants side of the equation
  const Reactants = equationReact.map((ele, index) => {
    return <Reactant name={ele} key={index} />
  })
//   This creates teh Products side of the equation
  const Products = equationProduct.map((ele, index) => {
    return <Product name={ele} key={index} />
  })
//   This produces the Results
  const Results = resultElements.map((ele, index) => {
    return <Result element={ele.element} amountR={ele.amountR} amountP={ele.amountP} key={index} />
  })
//   This controls the Reset
const handleClickReset = e => {
    e.preventDefault()
    setValue('')
    setEquationReact([])
    setEquationProduct([])
    setResultElements([])
    setErrorMessage('All values sent to the black hole of the Internet')
    setReactantMath([])
    setProductMath([])
}
// This handles Done button
const handleClickDone = e => {
    // Don't want this doing anything I don't want it to
    e.preventDefault()
    // Check to see any value in Results
    if (done === false) {
        setErrorMessage('You need to enter something')
    } else {
        if (resultElements.some(number => number.amountR === 0)) {
            setErrorMessage('You are missing an element on the Reactant side of the equation')
        } else if (resultElements.some(number => number.amountP === 0)) {
            setErrorMessage('You are missing an element on the Products side of the equation')
        }
    }
}
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
          <button onClick={handleClickReactant}>Reactant</button>
          <button onClick={handleClickProduct}>Product</button>
          <button onClick={handleClickDone}>Done</button>
          <button onClick={handleClickReset}>Reset</button>
        </form>
        <div>{errorMessage}</div>
        {Reactants}
        {Products}
        {Results}
      </section>
    </>
  )
}

export default Balance
