import React from "react"
// Import Building Component
import AddInput from "./AddInput"
import "./style.css"
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const ResultBalance = props => {
  //   Need a value for props
  // let fake = <AddInput value={""} />
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
  return (
    <>
      <div>
        {Reactant}
        <div id="arrow">
          <FontAwesomeIcon icon={faLongArrowAltRight} size="1x" />
        </div>
        {Product}
      </div>
    </>
  )
}

export default ResultBalance
