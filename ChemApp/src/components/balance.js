import React, { useState, useEffect } from "react"
// Import Components
import Result from "./balanceComponents/Result"
import ResultBalance from "./ResultBalance/ResultBalance"
import './balance.css'

// Import Functions
import compoundCheckReactants from "./functions/compoundCheckReactants"
import compoundCheckProducts from "./functions/compoundCheckProduct"

const Balance = props => {
  // fetch call
  const [data, setData] = useState({})
  useEffect(() => {
    fetch("https://neelpatel05.pythonanywhere.com/")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
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
    const symbols = data.map(ele => {
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
    const symbols = data.map(ele => {
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
  //   This produces the Results
  const Results = resultElements.map((ele, index) => {
    return (
      <Result
        element={ele.element}
        amountR={ele.amountR}
        amountP={ele.amountP}
        key={index}
      />
    )
  })
  //   This controls the Reset
  const handleClickReset = e => {
    e.preventDefault()
    setValue("")
    setEquationReact([])
    setEquationProduct([])
    setResultElements([])
    setErrorMessage("All values sent to the black hole of the Internet")
    setReactantMath([])
    setProductMath([])
  }
  return (
    <>
      <section>
        <form>
          <input
            id='compoundInput'
            type="text"
            placeholder="Compound"
            value={value}
            onChange={handleChange}
          />
          <button onClick={handleClickReactant}>Reactant</button>
          <button onClick={handleClickProduct}>Product</button>
          <button onClick={handleClickReset}>Reset</button>
        </form>
        <aside>{errorMessage}</aside>
        <ResultBalance eleReact={reactantMath} eleProduct={productMath}  equReact={equationReact} equProduct={equationProduct} eleList={resultElements} setEleList={setResultElements} start={done}/>
        <footer>{Results}</footer>
      </section>
    </>
  )
}

export default Balance
