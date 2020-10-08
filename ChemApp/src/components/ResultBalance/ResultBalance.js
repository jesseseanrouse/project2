import React, { useState, useEffect } from "react"
// Import Building Component
import AddInput from "./AddInput"
import Result from "./Result"
// Import Function
import balanceFunc from "./Function/balanceFunc"
import total from './Function/total'

const ResultBalance = props => {
  //   console.log(props)
  //   State lives here
  const [eleList, setEleList] = useState([])
  const [flag, setFlag] = useState(false)
  const [resultR, setResultR] = useState('')
  const [resultP, setResultP] = useState('')
  //   Need a value for props
  let fake = <AddInput value={""} />
  let Reactant = ""
  let i = 0
  let i2 = 0
  while (i < props.equReact.length) {
    if (i === 0) {
      if (props.start === true) {
        Reactant = (
          <AddInput
            value={props.equReact[0]}
            compound={props.eleReact}
            index={i2}
            func={balanceFunc}
            setFlag={setFlag}
            setFunction={setResultR}
          />
        )
        i2++
      }
    } else if (i % 2 === 0 && i !== 0) {
      Reactant = (
        <>
          <AddInput
            value={props.equReact[i]}
            compound={props.eleReact}
            index={i2}
            func={balanceFunc}
            setFlag={setFlag}
            setFunction={setResultR}
          />
          {Reactant}
        </>
      )
      i2++
    } else {
      Reactant = (
        <>
          {props.equReact[i]}
          {Reactant}
        </>
      )
    }
    i++
  }
  //   Build Product side of Equation
  let Product = ""
  i = 0
  i2 = 0
  while (i < props.equProduct.length) {
    if (i === 0) {
      if (props.start === true) {
        Product = (
          <AddInput
            value={props.equProduct[0]}
            compound={props.eleProduct}
            index={i2}
            func={balanceFunc}
            setFlag={setFlag}
            setFunction={setResultP}
          />
        )
      }
    } else if (i % 2 === 0) {
      Product = (
        <>
          <AddInput
            value={props.equProduct[i]}
            compound={props.eleProduct}
            index={i2}
            func={balanceFunc}
            setFlag={setFlag}
            setFunction={setResultP}
          />
          {Product}
        </>
      )
    } else {
      Product = (
        <>
          {props.equProduct[i]}
          {Product}
        </>
      )
    }
    i++
  }
  //   Trigger Function to set values for Results
  if (flag === true) {
    total(setEleList, resultR, resultP)
    setFlag(false)
  }
  // Set up Comparison
  const Results = eleList.map((ele, index) => {
    return (
      <Result
        element={ele.element}
        amountR={ele.amountR}
        amountP={ele.amountP}
        key={index}
      />
    )
  })
  return (
    <>
      <div>
        {Reactant}
        {Product}
      </div>
      {Results}
    </>
  )
}

export default ResultBalance
