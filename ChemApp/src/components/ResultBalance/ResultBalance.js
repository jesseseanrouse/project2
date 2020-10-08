import React, { useState } from "react"
// Import Building Component
import AddInput from "./AddInput"
import Result from "./Result"
// Import Function
import balanceFunc from "./Function/balanceFunc"

const ResultBalance = props => {
  //   console.log(props)
  //   State lives here
  const [eleList, setEleState] = useState([])
  //   Need a value for props
  let fake = <AddInput value={""} />
  // Build Reactant side of Equation
  let Reactant = ""
  let i = 0
  let i2 = 0
  while (i < props.equReact.length) {
    if (i === 0) {
      if (props.start === true) {
        Reactant = (
          <AddInput
            value={props.equReact[0]}
            eleList={eleList}
            setEleList={setEleState}
            compound={props.eleReact[0]}
            func={balanceFunc}
          />
        )
        i2++
      }
    } else if (i % 2 === 0 && i !== 0) {
      Reactant = (
        <>
          <AddInput
            value={props.equReact[i]}
            eleList={eleList}
            setEleList={setEleState}
            compound={props.eleReact[i2]}
            func={balanceFunc}
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
            eleList={eleList}
            setEleList={setEleState}
            compound={props.eleProduct[0]}
            func={balanceFunc}
          />
        )
      }
    } else if (i % 2 === 0) {
      Product = (
        <>
          <AddInput
            value={props.equProduct[i]}
            eleList={eleList}
            setEleList={setEleState}
            compound={props.Product[i2]}
            func={balanceFunc}
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
  // Set up Comparison
  const Results = props.eleList.map((ele, index) => {
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
