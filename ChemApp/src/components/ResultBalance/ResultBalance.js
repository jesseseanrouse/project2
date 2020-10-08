import React from "react"
// Import Building Component
import AddInput from "./AddInput"


const ResultBalance = props => {
  console.log(props)
  // Build Reactant side of Equation
  let Reactant = <AddInput value={''} start={true}/>
  let i = 0
  while (i < props.equReact.length) {
      if (i === 0) {
          Reactant = <AddInput value={props.equReact[0]} start={false}/>
      }
      i++
  }
  
  return <div>{Reactant}</div>
}

export default ResultBalance
