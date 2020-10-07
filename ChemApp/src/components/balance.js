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
      setResultElements
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
      setResultElements
    )
  }
  const handleChange = e => {
    const string = e.target.value
    setValue(string)
  }
  const Reactants = equationReact.map((ele, index) => {
    return <Reactant name={ele} key={index} />
  })
  const Products = equationProduct.map((ele, index) => {
    return <Product name={ele} key={index} />
  })
  const Results = resultElements.map((ele, index) => {
    return <Result element={ele.element} amountR={ele.amountR} amountP={ele.amountP} key={index} />
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
          <button onClick={handleClickReactant}>Reactant</button>
          <button onClick={handleClickProduct}>Product</button>
          <button>Done</button>
          <button>Reset</button>
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
