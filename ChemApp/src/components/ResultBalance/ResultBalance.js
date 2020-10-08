import React from "react"
// Import Building Component
import AddInput from "./AddInput"
import Result from './Result'

const ResultBalance = props => {
  //   console.log(props)
  // Build Reactant side of Equation
  let Reactant = <AddInput value={""} start={true} />
  let i = 0
  while (i < props.equReact.length) {
    if (i === 0) {
      Reactant = <AddInput value={props.equReact[0]} start={false} />
    } else if (i % 2 === 0) {
      Reactant = (
        <>
          <AddInput value={props.equReact[i]} start={false} />
          {Reactant}{" "}
        </>
      )
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
  let Product = <AddInput value={""} start={true} />
  i = 0
  while (i < props.equProduct.length) {
    if (i === 0) {
      Product = <AddInput value={props.equProduct[0]} start={false} />
    } else if (i % 2 === 0) {
      Product = (
        <>
          <AddInput value={props.equProduct[i]} start={false} />
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
